import Ember from 'ember';

export default Ember.Route.extend({
  game: Ember.inject.service(),
  preferences: Ember.inject.service(),

  model() {
    return this.get('game').create({
      size: this.get('preferences.size'),
      figure: this.get('preferences.figure')
    });
  },

  actions: {
    willTransition() {
      this.get('game').reset();
    }
  }
});
