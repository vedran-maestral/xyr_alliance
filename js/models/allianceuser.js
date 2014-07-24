/**
 * Created with JetBrains WebStorm.
 * User: VedranMa
 * Date: 7/23/14
 * Time: 10:37 AM
 * To change this template use File | Settings | File Templates.
 */

(function () {

    alert("koji kurac vise");
})




XyralityAlliance.Allianceuser = DS.Model.extend({
    name: DS.attr('string'),
    lastname: DS.attr('string'),
    password: DS.attr('string')
});

XyralityAlliance.Allianceuser.FIXTURES = [
    {
        id: 1,
        name: 'Vedran',
        lastname: "Maricevic",
        password: "123123123"
    },
    {
        id: 2,
        name: 'Elma',
        lastname: "Elezovic",
        password: "123123123"
    }
];
