var TasksView = Backbone.View.extend( {

	el : $("#list"),

	activeTemplate : _.template("<div class ='task'><a href = '#note/<%= id %>' class='x'>X</a><input type = 'checkbox' name = 'select' id = '<%= id %>'> <%= task %></div"),

	complitedTemplate : _.template("<div class ='task'><%= task %></div"),

	render : function(tasks) {
		var template = ($('input:radio[name=status]:checked').val() === "active") ? this.activeTemplate : this.complitedTemplate;
		var that = this;
		this.$el.empty();
		_.each(tasks, function(task) {
			that.$el.prepend(template(task));
		});
		$('#selector').prop("checked", false);
		$('#selector').trigger("change");
	}
});
