import Ember from 'ember';
import preference from 'ember-preferences/computed';

export default Ember.Controller.extend( {
  preferences: Ember.inject.service(),
  size: preference('size', { defaultValue: 16 }),
  figure: preference('figure', { defaultValue: 'tomster'}),
  time: preference('time', { defaultValue: '120'}),

  actions: {
    setFigure(option) {
      this.set('figure', option.value);
    },
    setSize(option) {
      this.set('size', option.value);
    },
    setTime(option) {
      this.set('time', option.value);
    }
  }
});