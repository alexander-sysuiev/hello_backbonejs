App.Views.Index = Backbone.View.extend({
  events: {
    "submit form": "save"
  },

  initialize: function(){
    _.bindAll(this, 'render');
  },

  render: function(){
    html_text = Mustache.to_html($('#todos_template').html(), {todos: this.collection.models});
    $('#todo_list').html(html_text);

    return this;
  },

  save: function() {
    var params = { name: this.$('#todo_name').val() };
    this.model.save(params);
    this.collection.fetch();

    return false;
  }
})

