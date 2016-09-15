import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['options-button'],
  classNameBindings: ['isSelected:selected'],
  isSelected: Ember.computed('selected', 'option.value', function(){
    return this.get('selected') === this.get('option.value');
  })
});
