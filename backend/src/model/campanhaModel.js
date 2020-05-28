const mongoose = require('mongoose')

const campanhaSchema = new mongoose.Schema({

    nomeCampanha: String,
    segmento :String,
    contexto: String,
    fimVigencia: Date,
    inicioVigencia: Date,
    codigo: String, 
})

module.exports =  mongoose.model('Campanha',campanhaSchema)