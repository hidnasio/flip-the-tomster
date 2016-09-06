import exists from 'flip-the-tomster/tests/pages/helpers/exists';
import {
  text,
  create,
  collection
} from 'ember-cli-page-object';

export default create({
  emptyMessage: text('.game-board-empty-message'),
  hasEmptyMessage: exists('.game-board-empty-message'),
  cards: collection({
    itemScope: '.game-board-card-container',
    item: { content: text() }
  }),
});
