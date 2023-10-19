const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  telefone: { type: String, required: true },
});

console.log("Tabela realizada com sucesso");

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;


/* 
Script para gerar collecition no banco no mongoDB
*/