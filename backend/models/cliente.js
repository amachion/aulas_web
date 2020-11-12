//importar o pacote
const mongoose = require('mongoose');

//definir o esquema "schema"
//é muito semelhante às bases relacionais

const clienteSchema = mongoose.Schema({
  nome: {type: String, required: true},
  fone: {type: String, required: true, default:'00000000'},
  email: {type: String, required: true}
});

//após criar o modelo, devemos exportá-lo para deixá-lo disponível
//para os outros módulos, para isso associamos ao nome Cliente

module.exports = mongoose.model('Cliente', clienteSchema);
