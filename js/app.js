App = Ember.Application.create();   //This is global object that contains Ember application
App.Router.map(
    function () {
        this.resource("about");

});



























/*
App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
*/
