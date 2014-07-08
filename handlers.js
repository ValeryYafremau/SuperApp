var tasks = [],
    _ = require('underscore');

module.exports.newTask = function(req, res) {

<<<<<<< HEAD
	console.log("POST");
=======
>>>>>>> d851f4532ac2517da978fed00239473c16a55d84
	tasks.push({
		"id" : tasks.length, 
		"task" : req.body.name, 
		"status" : "active"
		});
	res.end();

} 


<<<<<<< HEAD
module.exports.complete = function(req, res) {

	console.log("PUT");
	var id = req.params.id;	
	tasks[id].status = "completed";
=======
module.exports.complite = function(req, res) {

	var tasksId = req.body.tasksId;	
	_.each(tasksId, function(id){
		tasks[id].status = "complited";
	});
>>>>>>> d851f4532ac2517da978fed00239473c16a55d84
	res.end();

};

module.exports.filter = function(req, res) {

<<<<<<< HEAD
	console.log("GET");
=======
>>>>>>> d851f4532ac2517da978fed00239473c16a55d84
	var status = req.params.status;
	var sortedList = [];
	_.each(tasks, function(task){
		if(task.status === status) {
			sortedList.push(task);
		}
	});
	res.send(sortedList);

};


module.exports.delete = function(req, res) {

<<<<<<< HEAD
	console.log("DELETE");
	var id = req.params.id;	
	delete tasks[id];
=======
	var tasksId = req.body.tasksId;	
	_.each(tasksId, function(id) {
		delete tasks[id];
	});
>>>>>>> d851f4532ac2517da978fed00239473c16a55d84
	res.end();
}

