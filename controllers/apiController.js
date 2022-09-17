const Todos = require("../models/todoModel");

const bodyParser = require("body-parser");

module.exports = function(app) {
    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({extended: true}));

    app.get("/api/todos", function(req, res) {
        Todos.find({}, function(err, todos) {
            if(err) throw error;
            res.send(todos);
        })
    })

    app.get("/api/todo/:id", function(req, res) {
        Todos.findById(req.params.id, function(err, todo) {
            if(err) throw err;

            res.send(todo)
        })
    })

    app.post("/api/todo", function(req, res) {
        if(req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, {todo: req.body.todo, isDone: req.body.isDone, hasAttachment: req.body.hasAttachment}, function(err, updatedTodo) {
                if(err) throw err;
                res.send(updatedTodo)
            })
        } else {
            var newTodo = new Todos({
                todo: req.body.todo, isDone: req.body.isDone, hasAttachment: req.body.hasAttachment
            })
            newTodo.save(function(err, results) {
                res.send("New todo saved...")
            })
        }
    })

    app.delete("/api/todo",  function(req, res) {
        Todos.findByIdAndDelete(req.body.id, function(err) { 
            if(err) throw err;

            res.send("Selected todo deleted successfully");
        })
    })
}