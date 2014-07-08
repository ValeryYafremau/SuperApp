var Task = Backbone.Model.extend({
	urlRoot : "/"
});

var Tasks = Backbone.Collection.extend({
	url : function() {
		return "/filter/" + $('input:radio[name=status]:checked').val()
		},
    	model : Task
});

var tasks = new Tasks();

var tasksView = new TasksView();

var tasksRouter = new TasksRouter();

Backbone.history.start();

$(document).ready(function() {

    $('input:radio[name=status]').change(function(){  
	$('#complete').text($('input:radio[name=status]:checked').val() === 'active' ? 'Complete' : 'Delete');
	tasksRouter.navigate("#filter/" + $('input[name=status]:checked').val(), {trigger: true});  
    });

    $('#form').submit(function(e) {
    	tasksRouter.addTask();
 	return false;
    });

    $('#selector').change(function(e) {
	    var checked = $('#selector').prop("checked");
    	    $('input[name=select]').each(function () {
            	this.checked = checked;
        });
    });

});
