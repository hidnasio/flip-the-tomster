import Ember from 'ember';

import preference from 'ember-preferences/computed';

const { Route, get, $, inject: { service } } = Ember;

export default Route.extend({
  audio: service(),
  size: preference('size'),
  figure: preference('figure'),
  music: preference('music'),
  effects: preference('effects'),
  musicVolume: preference('musicVolume'),
  effectsVolume: preference('effectsVolume'),

  beforeModel() {
    this.get('audio').playMusic(this.get('audio.menuMusicTrack'), true);
  },

  model() {
    return {
      figures: [
        {
          label: 'Tomster',
          image: '/images/tomster14.png',
          value: 'tomster'
        },
        {
          label: 'Dog',
          image: '/images/dog13.png',
          value: 'dog'
        },
      ],
      sizes: [
        {
          label: '4 x 4',
          value: 16
        },
        {
          label: '6 x 6',
          value: 36
        },
        {
          label: '8 x 8',
          value: 64
        }
      ],
      music: this.get('music'),
      effects: this.get('effects'),
      musicVolume: this.get('musicVolume'),
      effectsVolume: this.get('effectsVolume')
    };
  },

  actions: {
    setFigure(option) {
      this.set('figure', option.value);
    },

    setSize(option) {
      this.set('size', option.value);
    },

    setMusic(event) {
      let element = get(event, 'target');
      let checked = $(element).is(':checked');

      this.set('music', checked);
    },

    setMusicVolume() {
      let currentVolume = this.controller.get('model.musicVolume');
      this.set('musicVolume', parseFloat(currentVolume));
    },

    setEffects(event) {
      let element = get(event, 'target');
      let checked = $(element).is(':checked');

      this.set('effects', checked);
    },

    setEffectsVolume() {
      let currentVolume = this.controller.get('model.effectsVolume');
      this.set('effectsVolume', parseFloat(currentVolume));
    }
  }
});
