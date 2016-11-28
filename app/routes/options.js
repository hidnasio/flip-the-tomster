import Ember from 'ember';
import preference from 'ember-preferences/computed';

export default Ember.Route.extend({
  size: preference('size'),
  figure: preference('figure'),

  model() {
    return {
      figures: [
        {
          label: 'Tomster',
          image: '/images/tomster14.png',
          value: 'tomster'
        },
        {
          label: 'Dog',
          image: '/images/dog13.png',
          value: 'dog'
        },
      ],
      sizes: [
        {
          label: '4 x 4',
          value: 16
        },
        {
          label: '6 x 6',
          value: 36
        },
        {
          label: '8 x 8',
          value: 64
        }
      ]
    };
  },

  actions: {
    setFigure(option) {
      this.set('figure', option.value);
    },
    setSize(option) {
      this.set('size', option.value);
    }
  }
});
