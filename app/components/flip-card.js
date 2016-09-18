import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['flip-card'],
  classNameBindings: [
    'isFlipped:show:veil',
    'isAnimated:animated'
  ],
  isAnimated: false,
  isFlipped: false,

  value: computed.alias('card.value'),
  image: computed('card.figure', 'card.value', function(){
    let figure = this.get('card.figure');
    let value = this.get('card.value');

    return `figure-${figure}${value}`;
  }),

  click() {
    this.set('isAnimated', true);
    this.get('onFlip')(this);
  },

  touchStart() {
    this.set('isAnimated', true);
    this.get('onFlip')(this);
  }
});
