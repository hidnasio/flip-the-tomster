import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['flip-card','one-one'],
  classNameBindings: ['isFlipped:flip'],
  isFlipped: false,
  value: Ember.computed.alias('card.value'),
  image: Ember.computed('card.figure', 'card.value', function(){
    let figure = this.get('card.figure');
    let value = this.get('card.value');

    return `/images/${figure}${value}.png`;
  }),
  click() {
    this.get('onFlip')(this);
  },
  didRender() {
    //TODO: fix this
    Ember.run.later(() => {
      this.$('.flip-card-figure,.flip-card-cover').css('animation-duration','0.3s');
    },1000);

  }
});
