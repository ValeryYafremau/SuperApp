var TasksView = Backbone.View.extend( {

	el : $("#list"),

	template : _.template("<div class ='task'><a href = '#note/<%= id %>' class='x'>X</a><input type = 'checkbox' name = 'select' id = '<%= id %>'> <%= task %></div"),

	render : function(tasks) {
		var that = this;
		this.$el.empty();
		_.each(tasks.models, function(task) {
			that.$el.prepend(that.template(task.toJSON()));
		});
		$('#selector').prop("checked", false);
		$('#selector').trigger("change");
	}
});
