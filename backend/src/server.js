const express = require('express')
const app = express()
const mongoose = require('mongoose')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.use('/', require('../router') )

mongoose.connect('mongodb+srv://gevored:<password>@cluster0-etzov.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology:true});
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));

app.listen(3000, function(){
    console.log('Server rodando na porta 3000')
})
