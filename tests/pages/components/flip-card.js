import isBackfaceVisible from 'flip-the-tomster/tests/pages/helpers/is-backface-visible';
import {
  hasClass,
  create
} from 'ember-cli-page-object';

const po = {
  isFlipped: hasClass('','.flip'),
  isVisibleFigure: isBackfaceVisible('.flip-card-figure'),
  isVisibleCover: isBackfaceVisible('.flip-card-cover')
};

export default create(po);
