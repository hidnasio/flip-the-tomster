import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import board from 'flip-the-tomster/tests/pages/components/game-board';

moduleForComponent('game-board', 'Integration | Component | game board', {
  integration: true,

  beforeEach() {
    board.setContext(this);
  },

  afterEach() {
    board.removeContext();
  }
});

test('it displays an error message if no cards', function(assert) {
  board.render(hbs`{{game-board}}`);
  assert.equal(board.emptyMessage, "THERE AREN'T CARDS TO DISPLAY");
  assert.ok(board.hasEmptyMessage);
});

test('it displays an error message if no cards with empty block', function(assert) {
  board.render(hbs`{{#game-board}}{{/game-board}}`);
  assert.equal(board.emptyMessage, "THERE AREN'T CARDS TO DISPLAY");
  assert.ok(board.hasEmptyMessage);
});

test('it displays cards', function(assert) {
  let gameSetup = {
    figure: 'tomster',
    cards: [
      { value: 2 },
      { value: 3 }
    ]
  };

  this.set('gameSetup', gameSetup);

  board.render(hbs`
    {{#game-board setup=gameSetup as |card flip|}}
      {{card.value}} - {{card.figure}}
    {{/game-board}}
  `);

  assert.notOk(board.hasEmptyMessage);
  assert.equal(board.cards().count, 2);
  assert.equal(board.cards(0).content, '2 - tomster');
  assert.equal(board.cards(1).content, '3 - tomster');
});


//TODO: test flip action

