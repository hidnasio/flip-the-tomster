import Ember from 'ember';

export default Ember.Component.extend({
  game: Ember.inject.service(),
  classNames: ['game-board'],

  cards: Ember.computed.alias('setup.cards'),

  isNotEmpty: Ember.computed.notEmpty('setup.cards'),

  gridSize: Ember.computed('setup.cards', function() {
    return Math.round(Math.sqrt(this.get('cards').length));
  }),

  hits: Ember.computed.alias('game.hits'),
  misses: Ember.computed.alias('game.misses'),
  tries: Ember.computed.alias('game.tries'),

  rate: Ember.computed('hits', 'misses', 'tries', function() {
    const tries = this.get('tries');
    const hits = this.get('hits');

    if (tries === 0) {
      return 0;
    } else {
      return Math.round((hits / tries) * 100);
    }
  }),

  actions: {
    flip(card) {
      this.get('game').flip(card);
    }
  }
});
