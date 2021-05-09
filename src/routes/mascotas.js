const express = require('express')
const MascotasController = require('../controllers/mascotas')


const router = express.Router()

router.get('/mascota/:mascotaid', (req, res) => {
    let mascota_id = req.params.mascotaid
    MascotasController.getMascota(res, mascota_id)
})

router.get('/mascotas', (req, res) => {
    MascotasController.getMascotas(res)
})

router.post('/mascota', (req, res) => {
    let body = req.body
    MascotasController.postMascota(res, body)
})

router.get('/usuario-original/:usuarioid', (req, res) => {
    let usuario_id = req.params.usuarioid
    MascotasController.getUsuarioOriginal(res, usuario_id)
})

router.get('/usuarios-originales', (req, res) => {
    MascotasController.getUsuariosOriginales(res)
})

router.post('/usuario-original', (req, res) => {
    let body = req.body
    MascotasController.postUsuarioOriginal(res, body)
})


module.exports = router