App.Routers.Todos = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  index: function() {
    var todos = new App.Collections.Todos();
    var model = new App.Models.Todo();
    var app_wrapper = $('#todo_app');
    var index_page = new App.Views.Index({collection: todos, model: model, el: app_wrapper});

    todos.bind('reset', index_page.render);
    todos.fetch();
  }

})