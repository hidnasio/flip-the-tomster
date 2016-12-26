import Ember from 'ember';

const { Route, inject: { service } } = Ember;

export default Route.extend({
  audio: service(),

  beforeModel() {
    this.get('audio').playMusic(this.get('audio.menuMusicTrack'), true);
  }
});
