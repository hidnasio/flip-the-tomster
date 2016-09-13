import Ember from 'ember';

export default Ember.Route.extend({
  game: Ember.inject.service(),

  model() {
    return this.get('game').create({size: 16});
  },

  actions: {
    willTransition() {
      console.log('hello');
      this.get('game').reset();
    }
  }
});
