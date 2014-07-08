var TasksRouter = Backbone.Router.extend({
	
    routes: {

    	"" : "redirect",
        "filter/:status": "filter",
        "note/:id" : "note",
        "new_task" : "addTask",
<<<<<<< HEAD
        "complete_selected" : "completeSelected"
=======
        "complite_selected" : "compliteSelected"
>>>>>>> d851f4532ac2517da978fed00239473c16a55d84

    },

    redirect : function() {
        this.navigate("#filter/active");
    },

    filter: function() {
<<<<<<< HEAD
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
=======
	var that = this;
    	$.ajax({
    		type: "GET",
    		url: this.backendController + "filter/" + $('input[name=status]:checked').val(),
    		success : function(tasks) {
        		tasksView.render(tasks);
      	        	that.navigate("#filter/" + $('input[name=status]:checked').val(), {trigger: true});  
    		}
    	});
    },

    complite : function(tasksId) {
        var that = this;
    	$.ajax({
    		type : "PUT",
    		url : this.backendController,
    		dataType : "JSON",
    		data : {"tasksId" : tasksId},
    		success : function() {
    			that.filter();
      	        	that.navigate("#filter/" + $('input[name=status]:checked').val(), {trigger: true});  	
		}
    	}); 
    }, 

    delete : function(tasksId) {
        var that = this;
    	$.ajax({
    		type : "DELETE",
    		url : this.backendController,
    		dataType : "JSON",
    		data : {"tasksId" : tasksId},
    		success : function() {
    			that.filter();
      	        	that.navigate("#filter/" + $('input[name=status]:checked').val(), {trigger: true});  	
		}
    	}); 
    },

    note : function(id) {
    	var tasksId = [];
    	tasksId.push(id);
	if($('input[name=status]:checked').val() === 'complited') {
		this.delete(tasksId);  
	} else {
		this.complite(tasksId);		
	} 
    },

    compliteSelected : function() {
        var tasksId = [];
        $('input[name=select]:checked').each(function () {
        	tasksId.push(this.id);
        }); 
	if($('input[name=status]:checked').val() === 'active') {
		this.complite(tasksId);	 
	} else {
		this.delete(tasksId); 	
	} 
>>>>>>> d851f4532ac2517da978fed00239473c16a55d84
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
