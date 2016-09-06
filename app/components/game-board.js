import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  game: Ember.inject.service(),
  isNotEmpty: Ember.computed.notEmpty('setup.cards'),
  actions: {
    flip(card) {
      this.get('game').flip(card);
    }
  }
});
