import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  game: Ember.inject.service(),
  isNotEmpty: Ember.computed.notEmpty('setup.cards'),
  gridSize: Ember.computed('setup.cards', function() {
    let size = 1;

    if(this.get('setup.cards').length === 16) {
      size = 3;
    } else if(this.get('setup.cards').length === 36) {
      size = 2;
    }

    return size;
  }),
  actions: {
    flip(card) {
      this.get('game').flip(card);
    }
  }
});
