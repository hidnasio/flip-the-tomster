import { test } from 'ember-qunit';
import Card from 'flip-the-tomster/models/card';

const tomsters = [
  {src: 'tomster1.jpg', value: 1},
  {src: 'tomster2.jpg', value: 2}
];
const cover = 'classic';
const fakeRand = n => n;

test('it exists', function(assert) {
  let cards = Card.generate(tomsters, cover, fakeRand);

  assert.equal(cards.length, 4);

  assert.equal(cards[0].figure, 'images/tomster1.jpg');
  assert.equal(cards[1].figure, 'images/tomster1.jpg');
  assert.equal(cards[2].figure, 'images/tomster2.jpg');
  assert.equal(cards[3].figure, 'images/tomster2.jpg');

  assert.equal(cards[0].value, '1');
  assert.equal(cards[1].value, '1');
  assert.equal(cards[2].value, '2');
  assert.equal(cards[3].value, '2');

  assert.equal(cards[0].cover, 'classic');
});
