const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({ new: true, runValidators: true })
//  Força o noderestful a retornar os dados atualizados
//  e também a aplicar as validações em updates

module.exports = Todo