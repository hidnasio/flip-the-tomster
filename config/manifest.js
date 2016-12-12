/*jshint node:true*/
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: 'Flip The Tomster',
    short_name: 'FlipTheTomster',
    description: 'Flip cards game featuring Tomster\'s 100 different faces',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffd23f',
    theme_color: '#ee4266',
    icons: [
      {
        src: '/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        targets: ['manifest']
      },
      {
        src: '/icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        targets: ['manifest']
      },
      {
        src: '/icons/apple-touch-icon.png',
        sizes: '180x180',
        targets: ['apple']
      }
    ],

    apple: {
      statusBarStyle: 'black-translucent'
    }
  };
}
