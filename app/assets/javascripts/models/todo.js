App.Models.Todo = Backbone.Model.extend({
  url: function() {
    var base = 'todos';
    if (this.isNew()) return base;
    return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
  }
});