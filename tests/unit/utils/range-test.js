import range from 'flip-the-tomster/utils/range';
import { module, test } from 'qunit';

module('Unit | Utility | range');

// Replace this with your real tests.
test('it returns an array given the min and max values', function(assert) {
  let arr = range(0, 10);

  assert.equal(arr.length, 11);
  assert.equal(arr[0], 0);
  assert.equal(arr[arr.length - 1], 10);
});

test('it returns an array with the min and max values', function(assert) {
  let arr = range(13, 23);

  assert.equal(arr.length, 11);
  assert.equal(arr[0], 13);
  assert.equal(arr[arr.length - 1], 23);
});
