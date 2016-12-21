/*jshint node:true*/
'use strict';

module.exports = humans;

function humans() {
  // See http://humanstxt.org/Standard.html for more information about
  // humans.txt format

  var team = [
    'Ignacio Ferreira (@hidnasio at Twitter and Github)',
    'Santiago Ferreira (@san650 at Twitter and Github)',
    'Marcelo Dominguez (@marpo60 at Twitter and Github)',
    'Juan Manuel Azambuja (@juanazam at Twitter and Github)'
  ];

  var thanks = [
    'Montevideo Working Group - MVDWG (http://www.mvdwg.xyz)'
  ];

  var site = [
    'Standards: HTML5, CSS3, ES2015',
    'Components: EmberJS, node',
    'Software: VIM, ember-cli'
  ];

  var note = 'Made with ♥ by MVDWG';

  return {
    team: team,
    thanks: thanks,
    site: site,
    note: note
  };
}
