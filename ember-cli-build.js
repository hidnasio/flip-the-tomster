/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    babel: {
      includePolyfill: true
    },
    nodeAssets: {
      'amazium': {
        srcDir: 'dist',
        import: ['amazium.css']
      }
    }
  });

  return app.toTree();
};
