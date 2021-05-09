const Database = require('../models/database')

let params = {}

class MascotasController {

    getMascota(res, mascota_id){
        params = {
            TableName: "Mascota",
            KeyConditionExpression: 'mascota_id = :i',
            ExpressionAttributeValues:{
                ':i': Number(mascota_id)
            }
        }

        Database.query(params, res)
    }

    getMascotas(res){
        params = {
            TableName: "Mascota"
        }

        Database.scan(params, res)
    }

    postMascota(res, body){
        let id = (Math.random() * 1000)
        body.mascota_id = id
        params = {
            TableName: "Mascota",
            Item: body
        }

        Database.put(params, res, id)
    }

    getUsuarioOriginal(res, usuario_id){
        params = {
            TableName: "UsuarioOriginal",
            KeyConditionExpression: 'usuario_original_id = :i',
            ExpressionAttributeValues:{
                ':i': Number(usuario_id)
            }
        }
        console.log(params)
        
        Database.query(params, res)
    }

    getUsuariosOriginales(res){
        params = {
            TableName: "UsuarioOriginal"
        }

        Database.scan(params, res)
    }
    
    postUsuarioOriginal(res, body){
        let id = (Math.random() * 1000)
        body.usuario_original_id = id
        params = {
            TableName: "UsuarioOriginal",
            Item: body
        }
        
        Database.put(params, res, id)
    }
    
}


module.exports = new MascotasController()