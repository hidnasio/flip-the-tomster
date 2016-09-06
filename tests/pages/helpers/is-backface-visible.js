import { findElement } from 'ember-cli-page-object/extend';

export default function isBackfaceVisible(selector, options = {}) {
  return {
    isDescriptor: true,

    get() {
      let e = findElement(this, selector, options);

      return e.css('transform').slice(0,12) === 'matrix3d(-1,';
    }
  };
}
