import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  actions: {
    flip(card) {
      card.set('isFlipped', true);
    }
  }
});
