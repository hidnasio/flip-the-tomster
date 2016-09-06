import { moduleFor, test } from 'ember-qunit';

moduleFor('service:card-types', 'Unit | Service | card types', { });

test('it generates tomsters', function(assert) {
  let service = this.subject();
  let tomsters = service.getFigures('tomster', 2, n => n);

  assert.equal(tomsters.length, 2);

  assert.equal(tomsters[0].src, 'tomster1.png');
  assert.equal(tomsters[1].src, 'tomster2.png');

  assert.equal(tomsters[0].value, '1');
  assert.equal(tomsters[1].value, '2');
});

test('it generates a lot of tomsters', function(assert) {
  let service = this.subject();
  let tomsters = service.getFigures('tomster', 40, n => n);

  assert.equal(tomsters.length, 40);
});

test('it generates covers', function(assert) {
  let service = this.subject();
  let cover = service.getCover('classic');

  assert.equal(cover, 'classic');
});
