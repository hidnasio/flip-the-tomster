import ember from 'ember';
import { findElement } from 'ember-cli-page-object/extend';

export default function isBackfaceVisible(selector, options = {}) {
  return {
    isDescriptor: true,

    get() {
      let e = findElement(this, selector, options);
      let matrix = [
        'matrix3d(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1)', // firefox
        'matrix3d(-1, 0, 1.22465e-16, 0, 0, 1, 0, 0, -1.22465e-16, 0, -1, 0, 0, 0, 0, 1)' // chrome
      ];

      return ember.$.inArray(e.css('transform'), matrix) >= 0;
    }
  };
}
