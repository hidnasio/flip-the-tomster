import { moduleForComponent, skip } from 'ember-qunit';
import wait from 'ember-test-helpers/wait';
import hbs from 'htmlbars-inline-precompile';
import c from 'flip-the-tomster/tests/pages/components/flip-card';

moduleForComponent('flip-card', 'Integration | Component | flip card', {
  integration: true,

  beforeEach() {
    c.setContext(this);
  },

  afterEach() {
    c.removeContext();
  }
});

//TODO: fix wired behaviour in phantomjs
skip('it starts face down', function(assert) {
  let card = { figure: 'image/tomster1.png' };
  this.set('card', card);

  c.render(hbs`{{flip-card card=card}}`);

  return wait().then(() => {
    assert.notOk(c.isVisibleFigure, 'Figure is not visible');
    assert.ok(c.isVisibleCover, 'Cover is visible');
  });
});

//TODO: fix wired behaviour in phantomjs
skip('it face up when flipped', function(assert) {
  let card = { figure: 'image/tomster1.png' };
  this.set('card', card);

  c.render(hbs`{{flip-card card=card isFlipped=true}}`);

  return wait().then(() => {
    assert.ok(c.isVisibleFigure, 'Figure is not visible');
    assert.notOk(c.isVisibleCover, 'Cover is visible');
  });
});
