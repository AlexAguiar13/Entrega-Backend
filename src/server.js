//Arquivo principal da aplicação, ou ponto de entrada.

//Dependências, modulos, importação etc.
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//Variável da aplicação onde vai ficar guardado as informações.
const app = express();

//Suporte ao protocolo de Http.
const server = require('http').Server(app);

//Suporte ao protocolo de WebSocket.
const io = require('socket.io')(server);

//Middleware.
app.use(express.json());

//Configuração do MongoDB.
mongoose.connect('mongodb+srv://alexaguiar:alex@teste-1muhc.mongodb.net/test?retryWrites=true&w=majority', 
{
   useNewUrlParser: true,
});

//Permite repassa a informação para o front-end para todas as rotas.
app.use((req, res, next) => {
   req.io = io;
   next();
});

//Permitir que qualquer aplicação acesse o back-end.
app.use(cors());

//Configuração das Rotas.
app.use(require('./routes'));

//Configuração da Porta.
server.listen(process.env.PORT || 3333);
