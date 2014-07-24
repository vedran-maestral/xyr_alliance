/**
 * Created with JetBrains WebStorm.
 * User: VedranMa
 * Date: 7/22/14
 * Time: 5:01 PM
 * To change this template use File | Settings | File Templates.
 */

    //This is reading the model  and main entry route
Todos.TodosRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('todo');
    }
});


Todos.Router.map(function () {
    this.resource('todos', { path: '/' }, function() {
        // additional child routes
        this.route('active');
        this.route('complete');

    });
});

Todos.TodosActiveRoute = Ember.Route.extend({
    model: function(){
        return this.store.filter('todo', function(todo) {
            return !todo.get('isCompleted');
        });
    },
    renderTemplate: function(controller) {
        this.render('todos/index', {controller: controller});
    }
});

Todos.TodosCompleteRoute = Ember.Route.extend({
    model: function(){
        return this.store.filter('todo', function(todo) {
            return todo.get('isCompleted');
        });
    },
    renderTemplate: function(controller) {
        this.render('todos/index', {controller: controller});
    }
});





//ALLIANCE
Todos.Router.map(function () {
    this.resource('alliance', { path: '/alliance' })
});

Todos.AllianceRoute = Ember.Route.extend({
    model: function() {

        return this.store.find('alliance');
    }  /*,
    setupController: function(controller, model) {
        controller.set('content', model);
    }*/
});

               //todos
//todos/index



