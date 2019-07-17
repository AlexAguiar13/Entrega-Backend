//Rotas da aplicação.

//Dependências, modulos, importação etc.
const express = require('express');
const CadastroController = require('./controllers/CadastroController');

const routes = express.Router();

//Requisição do cadastro.
routes.post('/cadastro', CadastroController.store);

//Requisição da lista.
routes.get('/cadastro', CadastroController.index);

//Exportando as informações.
module.exports = routes;
