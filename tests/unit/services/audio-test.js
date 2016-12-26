import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

const preferencesStub = Ember.Service.extend({
  music: null,
  musicVolume: null,
  fxOn: null,
  fxVolume: null
});

moduleFor('service:audio', 'Unit | Service | audio', {
  unit: true,
  beforeEach() {
    this.register('service:preferences', preferencesStub);
    this.inject.service('preferences', { as: 'preferences' });
  }
});

test('Service initialization', function(assert) {
  let service = this.subject();

  assert.notEqual(service.get('musicPlayer'), null, 'Player is initialized');
  assert.equal(service.get('musicVolume'), 0.8, 'Default music volume');
  assert.equal(service.get('fxVolume'), 0.6, 'Default FX volume');
});

test('Play a valid music track', function(assert) {
  let service = this.subject();

  service.set('musicOn', true);
  service.playMusic(service.get('menuMusicTrack'), false);

  assert.ok(service.get('isMusicPlaying'), 'Audio is playing');
  assert.equal(service.get('musicPlayer.volume'), service.get('musicVolume'), 'Volume is correct');
  let url = `${window.location.protocol}//${window.location.host}${service.get('menuMusicTrack')}`;
  assert.equal(service.get('musicPlayer.src'), url, 'Player url is correct');
});

test('Not playing invalid tracks', function(assert) {
  let service = this.subject();

  service.set('musicOn', true);
  service.playMusic(service.get('menuMusicTrack'), false);
  service.playMusic('invalid-audio.mp3', false);
  assert.notOk(service.get('isMusicPlaying'), 'Audio is stoped');
});

test('Not playing music when musicOn is off', function(assert) {
  let service = this.subject();
  service.set('musicOn', false);

  service.playMusic(service.get('menuMusicTrack'), false);
  assert.notOk(service.get('isMusicPlaying'), 'Audio is stoped');
});

test('Change music player volume', function(assert) {
  let service = this.subject();

  service.set('musicOn', true);

  service.playMusic(service.get('menuMusicTrack'), false);
  service.set('musicVolume', 0.1);
  assert.equal(service.get('musicPlayer.volume'), service.get('musicVolume'), 'Volume is correct');
});
