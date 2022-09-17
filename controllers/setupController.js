const Todos = require('../models/todoModel');

module.exports = function(app) {
    app.get('/api/setupTodos', (req, res) => {
        // seed database

        const starterTodos = [
            {
                todo: 'buy milk',
                isDone: false, 
                hasAttachment: false
            },
            {
                todo: 'feed dog',
                isDone: false, 
                hasAttachment: false
            },
            {
                todo: 'buy grocery',
                isDone: false, 
                hasAttachment: false
            },
            {
                todo: 'learn node',
                isDone: false, 
                hasAttachment: false
            }
        ];

        Todos.create(starterTodos, function(error, result) {
            res.send(result);
        })
    })
}

