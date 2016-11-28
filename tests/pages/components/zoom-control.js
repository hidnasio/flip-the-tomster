import {
  text,
  create
} from 'ember-cli-page-object';

export default create({
  title: text('h1'),
  in: {
    scope: '.zoom-control-in',
  },
  out: {
    scope: '.zoom-control-out',
  }

});
