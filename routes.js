const express = require('express');
const route = express.Router();
const homeController = require('./src/Controllers/homeController');
const contatoController = require('./src/Controllers/contatoController')

//rotas da home
route.get('/',  homeController.paginaInicial);
route.post('/', homeController.respostaFormulario)

//rotas de contato
route.get('/contato', contatoController.contato);

module.exports = route;