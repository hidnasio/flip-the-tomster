import { findElement } from 'ember-cli-page-object/extend';

export default function exists(selector, options = {}) {
  return {
    isDescriptor: true,

    get() {
      return findElement(this, selector, options).length > 0;
    }
  };
}
