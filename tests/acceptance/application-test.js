import { test } from 'qunit';
import moduleForAcceptance from 'flip-the-tomster/tests/helpers/module-for-acceptance';
import page from 'flip-the-tomster/tests/pages/application';

moduleForAcceptance('Acceptance | application', {
  beforeEach() {
  }
});

function tryCard(page) {
    if(page.unselectedCards().count <= 0) {
      return;
    }

    let card = Math.floor((Math.random() * page.unselectedCards().count));
    page.unselectedCards(card).click();

    return tryCard(page);
}

test('Play with tomster slow', function(assert) {
  page.visit();
  tryCard(page);
  assert.ok(true);
});
