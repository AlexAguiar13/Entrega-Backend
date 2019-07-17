//Dependências, modulos etc.
const mongoose = require('mongoose');

//Representação da Tabela, ou Schema.
const CadastroSchema = new mongoose.Schema({
   //Parâmetros
   nome: {
      type: String,
      required: true
   },
   data: {
      type: String,
      required: true
   },
   pontoP: {
      type: String,
      required: true
   },
   pontoD: {
      type: String,
      required: true
   },
});

//Exportando as informações, definindo model Cadastro e pasando como parâmetro o schema.
module.exports = mongoose.model('Cadastro', CadastroSchema);
