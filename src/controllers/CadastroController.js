//Reagras de negócio Cadastro.

//Dependências, modulos, importação etc.
const Cadastro = require('../models/Cadastro');

//Exportando o objeto que contém os metodos do controller.
module.exports = {
   //Metodo index
   async index(req, res) {
      const lista = await Cadastro.find();

      return res.json(lista);
   },
   
   //Metodo store
   async store(req, res) {
      //Desistruturação, recuperando informações dentro do req.body.
      const { nome, data, pontoP, pontoD } = req.body;

      //Informações que o Cadastro espera.
      const cadastro = await Cadastro.create({
         nome,
         data,
         pontoP,
         pontoD
      });

      req.io.emit('cadastro', cadastro);

      //Retorno do Controller Cadastro.
      return res.json(cadastro);
   }
}
