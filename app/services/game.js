import Ember from 'ember';
import randomize from 'flip-the-tomster/utils/shuffle';
import range from 'flip-the-tomster/utils/range';
import Card from 'flip-the-tomster/models/card';

export default Ember.Service.extend({
  shuffle: randomize,
  previousCard: null,

  create({size = 16, figure = 'tomster'} = {size: 16, figure: 'tomster'}) {
    return Ember.Object.create({
      cards: this.generateCards(size),
      figure: figure
    });
  },

  pickRandomValues(amount) {
    return this.shuffle(range(1, 32)).slice(0, amount);
  },

  generateCards(amount) {
    let numberOfValues = amount / 2;
    let values = this.pickRandomValues(numberOfValues);
    let cards = Card.generate(values);

    return this.shuffle(cards);
  },

  flip(card) {
    // current card already flipped -> do nothing
    if(card.get('isFlipped')) {
      return false;
    }

    // previous card null -> flip current card
    if(this.get('previousCard') === null) {
      card.set('isFlipped', true);
      this.set('previousCard', card);
      return false;
    }

    // previous card and current card equals -> flip current
    if(this.get('previousCard.value') === card.get('value')) {
      card.set('isFlipped', true);
      this.set('previousCard', null);
      return false;
    }

    // previous card and current card different -> flip previous and show current
    if(this.get('previousCard.value') !== card.get('value')) {
      card.set('isFlipped', true);

      let previous = this.get('previousCard');
      let current = card;

      Ember.run.later(() => {
        Ember.set(current, 'isFlipped', false);
        Ember.set(previous, 'isFlipped', false);
      }, 800);

      this.set('previousCard', null);

      return false;
    }
  }
});
