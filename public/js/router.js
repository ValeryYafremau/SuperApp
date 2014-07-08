var TasksRouter = Backbone.Router.extend({
	
    routes: {

    	"" : "redirect",
        "filter/:status": "filter",
        "note/:id" : "note",
        "new_task" : "addTask",
        "complete_selected" : "completeSelected"

    },

    redirect : function() {
        this.navigate("#filter/active");
    },

    filter: function() {
	tasks.fetch({success : function() {tasksView.render(tasks)}});
      	this.navigate("#filter/" + $('input[name=status]:checked').val());  
    },

    note : function(id) {
	if($('input[name=status]:checked').val() === 'completed') {
		new Task({"id" : id}).destroy();
	} else {
		new Task().save({"id" : id});		
	} 
	this.filter();
    },         

    addTask : function() { 
        var val = $("#text").val();
        if(!/^\s*$/.test(val)) {
		new Task().save({"name" : val});
		this.filter();
        	$("#text").val('');
        }
    },

    completeSelected : function() {
        tasks.reset();
	if($('input[name=status]:checked').val() === 'completed') {
		$('input[name=select]:checked').each(function () {
        		new Task({"id" : this.id}).destroy();
        	}); 
	} else {
		$('input[name=select]:checked').each(function () {
        		new Task({"id" : this.id}).save();
		});
	} 
	this.filter();
    }

});
