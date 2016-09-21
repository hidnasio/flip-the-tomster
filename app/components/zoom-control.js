import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['zoom-control'],
  target: Ember.$('html'),
  actions: {
    zoomIn() {
      let current = parseInt(this.get('target').css('font-size'));
      this.get('target').css('font-size', ++current);
    },

    zoomOut() {
      let current = parseInt(this.get('target').css('font-size'));
      this.get('target').css('font-size', --current);
    }
  }
});
