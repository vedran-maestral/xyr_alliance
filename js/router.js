/**
 * Created with JetBrains WebStorm.
 * User: VedranMa
 * Date: 7/22/14
 * Time: 5:01 PM
 * To change this template use File | Settings | File Templates.
 */


Todos.Router.map(function() {
    this.resource('todos', { path: '/' }, function() {
        this.resource('user', { path: '/user' });
    });
});

 //This is reading the model
Todos.TodosRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('todo');
    }
});

Todos.UserRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('user');
    }
});


