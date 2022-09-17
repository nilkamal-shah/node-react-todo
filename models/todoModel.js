const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todo: String, 
    isDone: Boolean,
    hasAttachment: Boolean
});

const Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;
