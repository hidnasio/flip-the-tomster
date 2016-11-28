import { moduleFor, test } from 'ember-qunit';

moduleFor('service:game', 'Unit | Service | game', {});

test('it generates random values between 1 and 32', function(assert) {
  let service = this.subject();
  let fakeShuffle = n => n;

  service.shuffle = fakeShuffle;

  let values = service.pickRandomValues(10, 'tomster');

  assert.equal(values.length, 10);
  assert.equal(values[0], 1);
  assert.equal(values[values.length - 1], 10);
});

test('it generates cards', function(assert) {
  let service = this.subject();
  let fakeShuffle = n => n;

  service.shuffle = fakeShuffle;

  let cards = service.generateCards(10, 'tomster');

  assert.equal(cards.length, 10);
  assert.equal(cards[0].get('value'), 1);
  assert.equal(cards[cards.length - 1].get('value'), 5);
});

test('it creates new games with default options', function(assert) {
  let service = this.subject();
  let fakeShuffle = n => n;

  service.shuffle = fakeShuffle;

  let gameSetup = service.create();

  assert.equal(gameSetup.get('cards').length, 16);
  assert.equal(gameSetup.get('figure'), 'tomster');
});

test('it creates new games with default figure', function(assert) {
  let service = this.subject();
  let fakeShuffle = n => n;

  service.shuffle = fakeShuffle;

  let gameSetup = service.create({size: 20});

  assert.equal(gameSetup.get('cards').length, 20);
  assert.equal(gameSetup.get('figure'), 'tomster');
});

test('it creates new games with default size', function(assert) {
  let service = this.subject();
  let fakeShuffle = n => n;

  service.shuffle = fakeShuffle;

  let gameSetup = service.create({figure: 'dog'});

  assert.equal(gameSetup.get('cards').length, 16);
  assert.equal(gameSetup.get('figure'), 'dog');
});
