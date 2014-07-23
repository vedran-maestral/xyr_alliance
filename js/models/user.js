/**
 * Created with JetBrains WebStorm.
 * User: VedranMa
 * Date: 7/23/14
 * Time: 10:37 AM
 * To change this template use File | Settings | File Templates.
 */


Todos.user = DS.Model.extend({
    name: DS.attr('string'),
    lastname: DS.attr('string')
});


Todos.user.FIXTURES = [
    {
        id: 1,
        name: 'Vedran',
        lastname: "Maricevic"
    }
];
