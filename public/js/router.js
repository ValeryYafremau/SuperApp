var TasksRouter = Backbone.Router.extend({
	
	backendController : "/",
	
    routes: {

    	"" : "redirect",
        "filter/:status": "filter",
        "note/:id" : "note",
        "new_task" : "addTask",
        "complite_selected" : "compliteSelected"

    },

    redirect : function() {
        this.navigate("#filter/active", {trigger: true});
    },

    filter: function() {
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
    },         

    addTask : function() { 
        var val = $("#text").val();
        var that = this;
        if(!/^\s*$/.test(val)) {
        	$.ajax({
    			type: "POST",
      			url: this.backendController,
      			dataType: "JSON",
      			data : {"name" : val},
      			success : function() {
				that.filter();
      	        		that.navigate("#filter/" + $('input[name=status]:checked').val(), {trigger: true});   
      			}
      		});;
        	$("#text").val('');
        }
    }

});
