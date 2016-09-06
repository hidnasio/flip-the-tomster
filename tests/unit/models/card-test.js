import { test } from 'ember-qunit';
import Card from 'flip-the-tomster/models/card';

const values = [1, 2];

test('it exists', function(assert) {
  let cards = Card.generate(values);

  assert.equal(cards.length, 4);
  assert.equal(cards[0].get('value'), '1');
  assert.equal(cards[1].get('value'), '1');
  assert.equal(cards[2].get('value'), '2');
  assert.equal(cards[3].get('value'), '2');
});
