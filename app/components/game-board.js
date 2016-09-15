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

  startTimer: Ember.on('didRender', function() {
    Ember.run.later(() => {
      this.get('started')();
    }, 1000);
  }),

  stopTimer: Ember.on('didDestroyElement', function() {
    this.get('stoped')();
  }),

  actions: {
    flip(card) {
      this.get('game').flip(card);
    }
  }
});
