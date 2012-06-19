var App = {
  Collections: {},
  Models: {},
  Routers: {},
  Views: {},
  init: function(){
    new App.Routers.Todos();
    Backbone.history.start();
  }
}
