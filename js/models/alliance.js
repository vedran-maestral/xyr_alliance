/**
 * Created with JetBrains WebStorm.
 * User: VedranMa
 * Date: 7/23/14
 * Time: 3:35 PM
 * To change this template use File | Settings | File Templates.
 */


XyralityAlliance.Alliance = DS.Model.extend({
    name: DS.attr('string'),
    alliance: DS.attr('string'),
    status: DS.attr('string'),
    date: DS.attr('string') //string for now Untill I figure how to workj with date
});

XyralityAlliance.Alliance.FIXTURES = [
    {
        id: 1,
        name: 'Vedran',
        alliance: "Number One",
        status: "Friend",
        date: "12.10.1975"
    },
    {
        id: 2,
        name: 'Elma',
        alliance: "Invaders",
        status: "Enemy",
        date: "22.11.1981"
    }
];

