var TasksView = Backbone.View.extend( {

	el : $("#list"),

	template : _.template("<div class ='task'><a href = '#note/<%= id %>' class='x'>X</a><input type = 'checkbox' name = 'select' id = '<%= id %>'> <%= task %></div"),

	render : function(tasks) {
		var that = this;
		this.$el.empty();
<<<<<<< HEAD
		_.each(tasks.models, function(task) {
			that.$el.prepend(that.template(task.toJSON()));
=======
		_.each(tasks, function(task) {
			that.$el.prepend(that.template(task));
>>>>>>> d851f4532ac2517da978fed00239473c16a55d84
		});
		$('#selector').prop("checked", false);
		$('#selector').trigger("change");
	}
});
