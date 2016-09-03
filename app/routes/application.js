import Ember from 'ember';
import Card from 'flip-the-tomster/models/card';

export default Ember.Route.extend({
  cardTypes: Ember.inject.service(),

  model() {
    let figures = this.get('cardTypes').getFigures('tomster', 8);
    let cover = this.get('cardTypes').getCover('classic');
    return Card.generate(figures, cover);
  }
});
