/**
 * Created with JetBrains WebStorm.
 * User: VedranMa
 * Date: 7/23/14
 * Time: 11:57 AM
 * To change this template use File | Settings | File Templates.
 */

Todos.AllianceController = Ember.ObjectController.extend({

    actions: {
        removeAllianceEntry: function () {

           var currentAlliance = this.get("model");
            debugger;
               currentAlliance.deleteRecord();
               currentAlliance.save();

        }

    }
});