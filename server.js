var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: "Buy new Formals",
	completed: false
}, {
	id:2,
	description: "Get hair cut done",
	completed: false
}, {
	id:3,
	description: "Get Placed",
	completed:false
}];


app.get('/', function(req, res){
	res.send('Todo API Root');
});

app.get('/todos', function(req, res){
	res.json(todos);
});

app.get('/todos/:id', function(req, res){
	var todoId = parseInt(req.params.id);
	var matchedTodo;

	todos.forEach(function(todo){
		if(todoId === todo.id){
			matchedTodo = todo;
		}
	});
	if(matchedTodo){
		res.json(matchedTodo);
	}else{
		res.status(404).send();
	}
});

app.listen(PORT, function(){
	console.log('Express running at port ' + PORT +'!')
})