import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import zoom from 'flip-the-tomster/tests/pages/components/zoom-control';

moduleForComponent('zoom-control', 'Integration | Component | zoom control', {
  integration: true,

  beforeEach() {
    zoom.setContext(this);
  },

  afterEach() {
    zoom.removeContext();
  }
});

test('it renders', function(assert) {
  zoom.render(hbs`{{zoom-control}}`);

  assert.equal(zoom.in.text, '+');
  assert.equal(zoom.out.text, '-');
});

test('it zooms in and out', function(assert) {
  let fakeElement = this.$('<div></div>').css('font-size', '10px');
  this.set('target', fakeElement);

  zoom.render(hbs`{{zoom-control target=target}}`);

  assert.equal(this.get('target').css('font-size'), '10px');

  zoom.in.click();

  assert.equal(this.get('target').css('font-size'), '11px');

  zoom.out.click();
  zoom.out.click();

  assert.equal(this.get('target').css('font-size'), '9px');
});
