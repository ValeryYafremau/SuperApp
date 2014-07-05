module.exports.setRoutes = function(app, handlers){

	app.get('/filter/:status', handlers.filter);

	app.post('/', handlers.newTask);

	app.put('/', handlers.complite);

	app.delete('/', handlers.delete);

}

