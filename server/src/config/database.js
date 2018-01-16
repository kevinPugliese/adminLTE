const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://localhost/mymoney');

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o límite mínimo do '{MIN}'.";
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o límite mínimo do '{MAX}'.";
mongoose.Error.messages.Number.min = "O '{VALUE}' não é válido para o atributo {PATH}'.";
