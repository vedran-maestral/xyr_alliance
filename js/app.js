window.XyralityAlliance = Ember.Application.create();

 /*
  Now we'll add fixture data.
  Fixtures are a way to put sample data into an application before connecting the application to long-term persistence.
  First, update js/application.js to indicate that your application's ApplicationAdapter is an extension of the DS.FixtureAdapter.
  Adapters are responsible for communicating with a source of data for your application.
  Typically this will be a web service API, but in this case we are using an adapter designed to load fixture data.
  */
XyralityAlliance.ApplicationAdapter = DS.FixtureAdapter.extend();