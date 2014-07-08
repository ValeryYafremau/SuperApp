module.exports.setRoutes = function(app, handlers){

	app.get('/filter/:status', handlers.filter);

	app.post('/', handlers.newTask);

	app.put('/:id', handlers.complete);

	app.delete('/:id', handlers.delete);

}

