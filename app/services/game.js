import Ember from 'ember';
import randomize from 'flip-the-tomster/utils/shuffle';
import range from 'flip-the-tomster/utils/range';
import Card from 'flip-the-tomster/models/card';
import ENV from 'flip-the-tomster/config/environment';

const { Service, inject: { service }, run } = Ember;

export default Service.extend({
  audio: service(),

  shuffle: randomize,

  previousCard: null,

  scheduledAnimation: null,

  hits: 0,

  misses: 0,

  ended: Ember.computed('hits', 'size', function() {
    return this.get('hits') === this.get('size') / 2;
  }),

  tries: Ember.computed('hits', 'misses', function() {
    return this.get('hits') + this.get('misses');
  }),

  create(options = {}) {
    let size = options.size || 16;
    let figure = options.figure || 'tomster';

    this.set('size', size);

    return Ember.Object.create({
      cards: this.generateCards(size, figure),
      figure: figure
    });
  },

  generateCards(amount, figure) {
    let numberOfValues = amount / 2;
    let values = this.pickRandomValues(numberOfValues, figure);
    let cards = Card.generate(values);

    return this.shuffle(cards);
  },

  pickRandomValues(amount, figure) {
    let numberOfFigures = ENV.figures[figure];

    return this.shuffle(range(1, numberOfFigures)).slice(0, amount);
  },

  reset() {
    this.setProperties({
      previousCard: null,
      hits: 0,
      misses: 0
    });

    let animation = this.get('scheduledAnimation');

    if (animation) {
      Ember.run.cancel(animation);
    }
  },

  flip(card) {
    let audio = this.get('audio');

    // current card already flipped -> do nothing
    if (card.get('isFlipped')) {
      return false;
    }

    audio.playFx(audio.fxFlipCard);

    // previous card null -> flip current card
    if (this.get('previousCard') === null) {
      card.set('isFlipped', true);
      this.set('previousCard', card);
      return false;
    }

    // previous card and current card equals -> flip current
    if (this.get('previousCard.value') === card.get('value')) {
      this.incrementProperty('hits');
      card.set('isFlipped', true);
      this.set('previousCard', null);

      run.later(() => {
        audio.playFx(audio.fxCardCorrect);
      }, 50);

      return false;
    }

    // previous card and current card different -> flip previous and show current
    if (this.get('previousCard.value') !== card.get('value')) {
      this.incrementProperty('misses');
      card.set('isFlipped', true);

      let previous = this.get('previousCard');
      let current = card;

      let animation = run.later(() => {
        Ember.set(current, 'isFlipped', false);
        Ember.set(previous, 'isFlipped', false);
      }, 800);

      this.set('scheduledAnimation', animation);
      this.set('previousCard', null);

      return false;
    }
  }
});
