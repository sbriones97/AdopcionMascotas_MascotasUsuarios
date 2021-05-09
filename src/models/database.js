const aws = require('aws-sdk')

let awsConfig = {
    "region": "us-east-2",
    "endpoint": "http://dynamodb.us-east-2.amazonaws.com",
    "accessKeyId": "AKIA3DIUBMJLDJIKQ7FE", "secretAccessKey": "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"
}
aws.config.update(awsConfig)
let docClient = new aws.DynamoDB.DocumentClient()

class Database {
    async query(params, res) {
        let result = {}
        result = await new Promise((resolve, reject) => {
                docClient.query(params, function(err, data) {
                if(err) {
                    if(res){
                        res.send({
                            success: false,
                            message: err
                        })
                    }
                    reject(err)
                } else {
                    let { Items } = data
                    if(res){
                        res.send({
                            success: true,
                            message: "Ok",
                            data: Items
                        })
                    }
                    resolve(Items)
                }
            })
        })
        return result
    }

    async scan(params, res) {
        let result = {}
        result = await new Promise((resolve, reject) => {
            docClient.scan(params, function(err, data) {
                if(err) {
                    if(res){
                        res.send({
                            success: false,
                            message: err
                        })
                    }
                    reject(err)
                } else {
                    let { Items } = data
                    if(res){
                        res.send({
                            success: true,
                            message: "Ok",
                            data: Items
                        })
                    }
                    resolve(Items)
                }
            })
        })
        return result
    }

    async put(params, res, id) {
        await docClient.put(params, function(err, data) {
            if(err) {
                if(res){
                    res.send({
                        success: false,
                        message: err
                    })
                }
                return err
            } else {
                if(res){
                    res.send({
                        success: true,
                        message: "Ok",
                        id: id
                    })
                }
                return id
            }
        })
    }

}

module.exports = new Database()