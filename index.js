/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ewd-calendar',

  included: function(app) {
    this._super.included(app);

    app.import(path.join(app.bowerDirectory, 'lodash/lodash.js'));
    app.import(path.join(app.bowerDirectory, 'interact/interact.js'));
    app.import(path.join(app.bowerDirectory, 'moment-timezone/builds/moment-timezone-with-data.js'));

    app.import('vendor/ewd-calendar/lodash.js', {
      type: 'vendor',
      exports: { 'lodash': ['default'] }
    });

    app.import('vendor/ewd-calendar/jstz.js', {
      type: 'vendor',
      exports: { 'jstz': ['default'] }
    });

    app.import('vendor/ewd-calendar/interact.js', {
      type: 'vendor',
      exports: { 'interact': ['default'] }
    });

    app.import('vendor/jstz.js', {
      type: 'vendor'
    });

    if (app.env === 'test') {
      app.import(path.join(app.bowerDirectory, 'jquery-simulate/jquery.simulate.js'), {
        type: 'test'
      });
    }
  }
};
