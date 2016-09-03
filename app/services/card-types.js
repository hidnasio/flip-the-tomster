import Ember from 'ember';
import randomize from 'flip-the-tomster/utils/shuffle';

export default Ember.Service.extend({
  init() {
    this._super(...arguments);

    this.set('figures', {
      tomster: generateFigures(43, 'tomster#.png')
    });

    this.set('covers', {
      classic: 'classic'
    });
  },

  getFigures(type, count, shuffle = randomize) {
    return shuffle(this.get(`figures.${type}`)).slice(0, count);
  },

  getCover(type) {
    return this.get(`covers.${type}`);
  }
});

function generateFigures(count, src) {
  let range = [...Array(count).keys()].map(n => n + 1);
  let figures = [];
  range.forEach( n => {
    figures.pushObject({
      src: src.replace('#', n),
      value: n
    });
  });

  return figures;
}
