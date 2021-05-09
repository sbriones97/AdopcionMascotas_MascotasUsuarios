const express = require('express')
const UsuariosController = require('../controllers/usuarios')
const MascotasController = require('../controllers/mascotas')


const router = express.Router()


router.get('/usuario/:usuarioid', (req, res) => {
    usuario_id = req.params.usuarioid
    UsuariosController.getUsuario(res, usuario_id)
})

router.get('/usuarios', (req, res) => {
    UsuariosController.getUsuarios(res)
})

router.post('/usuario', (req, res) => {
    let body = req.body
    UsuariosController.postUsuario(res, body)
})

router.get('/documento/:familia_id', (req, res) => {
    familia_id = req.params.familia_id
    UsuariosController.getDocumentos(res, familia_id)
})

router.post('/documento', (req, res) => {
    let body = req.body
    UsuariosController.postDocumento(res, body)
})

router.get('/familia/:usuarioid', (req, res) => {
    usuario_id = req.params.usuarioid
    UsuariosController.getFamilia(res, usuario_id)
})

router.get('/familias', (req, res) => {
    usuario_id = req.params.usuarioid
    UsuariosController.getFamilias(res)
})

router.post('/familia', (req, res) => {
    let body = req.body
    UsuariosController.postFamilia(res, body)
})



module.exports = router