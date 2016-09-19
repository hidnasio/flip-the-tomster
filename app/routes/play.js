import Ember from 'ember';

const { Route, inject: { service } } = Ember;

export default Route.extend({
  game: service(),
  audio: service(),
  preferences: service(),

  beforeModel() {
    this.get('audio').playMusic(this.get('audio.gameMusicTrack'), true);
  },

  model() {
    return this.get('game').create({
      size: this.get('preferences.size'),
      figure: this.get('preferences.figure')
    });
  },

  actions: {
    willTransition() {
      this.get('game').reset();
    }
  }
});
