import Ember from 'ember';
import preference from 'ember-preferences/computed';

export default Ember.Controller.extend({
  gameStarted: false,
  preferences: Ember.inject.service(),
  time: preference('time', { defaultValue: 120}),

  transitionClass: Ember.computed('time', function() {
    const duration = this.get('time');

    return `game-duration-${duration}`;
  }),

  actions: {
    started() {
      this.set('gameStarted', true);
    },

    stoped() {
      this.set('gameStarted', false);
    }
  }
});
