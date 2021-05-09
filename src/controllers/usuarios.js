const Database = require('../models/database')
const fetch = require("node-fetch")
let params = {}

class UsuariosController {
    getUsuario(res, usuario_id){
        params = {
            TableName: "Usuario",
            KeyConditionExpression: 'usuario_id = :i',
            ExpressionAttributeValues:{
                ':i': Number(usuario_id)
            }
        }

        Database.query(params, res)
    }

    getUsuarios(res){
        params = {
            TableName: "Usuario"
        }

        Database.scan(params, res)
    }
    
    postUsuario(res, body){
        let id = (Math.random() * 1000)
        body.usuario_id = id
        params = {
            TableName: "Usuario",
            Item: body
        }

        Database.put(params, res, id)
    }
    
    async getDocumentos(res, familia_id){
        params = {
            TableName: "Documento",
            FilterExpression: "familia_id = :i",
            ExpressionAttributeValues:{
                ':i': Number(familia_id)
            }
        }
        
        let docs = await Database.scan(params, null)
        
        for (let doc in docs) {
            await fetch('https://us-south.functions.appdomain.cloud/api/v1/web/is707869%40iteso.mx_dev/adopcionmascotas/validacionDocumentos', {
                method: 'post',
                body:    JSON.stringify({'_id': docs[doc].documento_id.toString()}),
                headers: { 'Content-Type': 'application/json' },
            })
                .then(response => {
                    return response.json()
                } )
                .then(body => {
                    docs[doc].validado = body.validado
                    //res.status(200).end(body)
                })
                .catch(err => {
                    console.log(err)
                    //res.status(err.status).end(err.message);
                });
        }
        res.send({
            success: true,
            message: "Ok",
            data: docs
        })
    }
    
    postDocumento(res, body){
        let id = (Math.random() * 1000)
        body.documento_id = id
        params = {
            TableName: "Documento",
            Item: body
        }

        Database.put(params, res, id)
    }

    async getFamilia(res, usuario_id){
        params = {
            TableName: "Usuario",
            KeyConditionExpression: 'usuario_id = :i',
            ExpressionAttributeValues:{
                ':i': Number(usuario_id)
            }
        }

        let result1 = await Database.query(params, null)

        params = {
            TableName: "Familia",
            KeyConditionExpression: 'familia_id = :i',
            ExpressionAttributeValues:{
                ':i': result1[0].familia_id
            }
        }

        Database.query(params, res)
    }

    getFamilias(res){
        params = {
            TableName: "Familia"
        }

        Database.scan(params, res)
    }
    
    postFamilia(res, body){
        let id = (Math.random() * 1000)
        body.familia_id = id
        params = {
            TableName: "Familia",
            Item: body
        }

        Database.put(params, res, id)
    }
    
}



module.exports = new UsuariosController()