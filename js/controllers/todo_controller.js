/**
 * Created with JetBrains WebStorm.
 * User: VedranMa
 * Date: 7/23/14
 * Time: 11:57 AM
 * To change this template use File | Settings | File Templates.
 */

Todos.TodoController = Ember.ObjectController.extend({
    actions: {
        editTodo: function () {
            this.set('isEditing', true);
        }
    },

    isEditing: false,

    isCompleted: function(key, value){
        var model = this.get('model');

        if (value === undefined) {
            // property being used as a getter
            return model.get('isCompleted');
        } else {
            // property being used as  setter
            model.set('isCompleted', value);
            model.save();
            return value;
        }
    }.property('model.isCompleted')
});