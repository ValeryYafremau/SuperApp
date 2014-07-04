var tasks = [],
    _ = require('underscore');

module.exports.newTask = function(req, res) {
	tasks.push({
		"id" : tasks.length, 
		"task" : req.body.name, 
		"status" : "active"
		});
	res.end();
} 


module.exports.complite = function(req, res) {
	var tasksId = req.body.tasksId;	
	_.each(tasksId, function(id){
		tasks[id].status = "complited";
	});
	res.end();
};

module.exports.filter = function(req, res) {
	var status = req.params.status;
	var sortedList = [];
	_.each(tasks, function(task){
		if(task.status === status) {
			sortedList.push(task);
		}
	});
	res.send(sortedList);
};
