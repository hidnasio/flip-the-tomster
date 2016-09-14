import Ember from 'ember';

export default Ember.Route.extend({
  game: Ember.inject.service(),

  model() {
    return this.get('game').create();
  },

  actions: {
    willTransition() {
      this.get('game').reset();
    }
  }
});
