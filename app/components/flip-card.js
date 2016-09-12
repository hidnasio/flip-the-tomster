import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['flip-card','one-one'],
  classNameBindings: ['isFlipped:flip'],
  isFlipped: false,
  value: computed.alias('card.value'),
  image: computed('card.figure', 'card.value', function(){
    let figure = this.get('card.figure');
    let value = this.get('card.value');

    return `figure-${figure}${value}`;
  }),

  click() {
    console.log('click');
    this.get('onFlip')(this);
  },

  touchStart() {
    console.log('touch');
    this.get('onFlip')(this);
  },
  didRender() {
    //TODO: fix this
    Ember.run.later(() => {
      this.$('.flip-card-figure,.flip-card-cover').css('animation-duration','0.3s');
    },1000);
  }
});
