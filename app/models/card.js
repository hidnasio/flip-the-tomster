import Ember from 'ember';

const Card = Ember.Object.extend({
}).reopenClass({
  generate(values) {
    let cards = [];

    values.forEach(value => {
      let card = Card.create({
        value
      });

      cards.pushObjects([card,card]);
    });

    return cards;
  }
});

export default Card;
