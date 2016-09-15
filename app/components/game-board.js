import Ember from 'ember';

export default Ember.Component.extend({
  game: Ember.inject.service(),
  classNames: ['grid-12', 'game-board'],

  leftColumn: Ember.computed.filter('setup.cards', function(card, index) {
    return index < this.get('setup.cards').length/2;
  }),

  rigthColumn: Ember.computed.filter('setup.cards', function(card, index) {
    return index >= this.get('setup.cards').length/2;
  }),

  isNotEmpty: Ember.computed.notEmpty('setup.cards'),

  gridSize: Ember.computed('setup.cards', function() {
    let size = 3;

    if(this.get('setup.cards').length === 16) {
      size = 6;
    } else if(this.get('setup.cards').length === 36) {
      size = 4;
    }

    return size;
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
