import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', {path: ''});
  this.route('play');
  this.route('options');
  this.route('credits');
});

export default Router;
