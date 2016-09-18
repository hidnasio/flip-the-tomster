import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['options-button'],
  classNameBindings: ['isSelected:selected'],
  isSelected: Ember.computed.equal('selected', 'option.value')
});
