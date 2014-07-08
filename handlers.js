var tasks = [],
    _ = require('underscore');

module.exports.newTask = function(req, res) {

	console.log("POST");
	tasks.push({
		"id" : tasks.length, 
		"task" : req.body.name, 
		"status" : "active"
		});
	res.end();

} 


module.exports.complete = function(req, res) {

	console.log("PUT");
	var id = req.params.id;	
	tasks[id].status = "completed";
	res.end();

};

module.exports.filter = function(req, res) {

	console.log("GET");
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

	console.log("DELETE");
	var id = req.params.id;	
	delete tasks[id];
	res.end();
}

