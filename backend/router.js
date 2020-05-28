const express  = require('express')
const rotas = express.Router()

const CampanhaControlle = require('./src/controller/camapanhaController')

rotas.post('/cadastro', CampanhaControlle.Add)

module.exports  = rotas
