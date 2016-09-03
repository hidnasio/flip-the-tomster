import Ember from 'ember';
import randomize from 'flip-the-tomster/utils/shuffle';

const Card = Ember.Object.extend({
}).reopenClass({
  generate(figures, cover, shuffle = randomize) {
    let cards = [];
    figures.forEach((figure) => {
      let card = Card.create({
        figure: `images/${figure.src}`,
        value: figure.value,
        cover: cover
      });
      cards.pushObjects([card,card]);
    });
    return shuffle(cards);
  }
});

export default Card;
