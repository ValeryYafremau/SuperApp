var idCounter = 0;

var isSelected = false;

var controller = "./MainController";

var Task = Backbone.Model.extend({

    urlRoot : controller

});

var TasksList = Backbone.Collection.extend({
    model: Task
});

var tasks = new TasksList();

var tasksView = new TasksView();

var tasksRouter = new TasksRouter();

Backbone.history.start();

$(document).ready(function() {

    $('input:radio[name=status]').change(function(){
        tasksRouter.filter($('input:radio[name=status]').val());
    });

    $('#form').submit(function(e) {
    	tasksRouter.addTask();
 	return false;
    });

    $('#selector').change(function(e) {
	    var checked = $('#selector').prop("checked");
    	    $('input[name=select]').each(function () {
            	this.checked = checked;
        })
	 $('#selectorText').text(checked ? "Unselect All" : "Select All");
    });

});
