/**
 * Created with JetBrains WebStorm.
 * User: VedranMa
 * Date: 7/23/14
 * Time: 10:00 AM
 * To change this template use File | Settings | File Templates.
 */

Todos.Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
    {
        id: 1,
        title: 'haman zaman',
        isCompleted: true
    },
    {
        id: 2,
        title: 'OPLETIDER SAMO TAKO',
        isCompleted: true
    },
    {
        id: 3,
        title: 'Profit!',
        isCompleted: false
    }
];



