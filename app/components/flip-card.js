import Ember from 'ember';

export default Ember.Component.extend({
  isFlipped: false,
  didInsertElement() {
    this._super(...arguments);
    this.$().addClass('flip-card-container grid-3 grid-3-mobile');
  },
  actions: {
    show() {
      this.sendAction('onFlip', this);
    }
  }
});
