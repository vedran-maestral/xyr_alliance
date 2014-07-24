/**
 * Created with JetBrains WebStorm.
 * User: VedranMa
 * Date: 7/22/14
 * Time: 5:01 PM
 * To change this template use File | Settings | File Templates.
 */


XyralityAlliance.Router.map(function () {
    this.resource('allianceusers', { path: '/' });
});


    //This is reading the model  and main entry route
XyralityAlliance.AllianceusersRoute = Ember.Route.extend({
    model: function() {

        var a = this.store.find('allianceuser');
        debugger;
        return this.store.find('allianceuser');
    }
});

//model se szove Todo

