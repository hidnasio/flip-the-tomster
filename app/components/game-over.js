import Ember from 'ember';

const { computed } = Ember;

const raf = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      return window.setTimeout(callback, 1000 / 60);
    };

const COLORS = [
  "DodgerBlue",
  "OliveDrab",
  "Gold",
  "pink",
  "SlateBlue",
  "lightblue",
  "Violet",
  "PaleGreen",
  "SteelBlue",
  "SandyBrown",
  "Chocolate",
  "Crimson"
];

const MAX_PARTICLES = 150;

const { random } = Math;

function randomFromTo(from, to) {
  return Math.floor(random() * (to - from + 1) + from);
}

function ConfettiParticle({ color, width, height, ctx }) {
  this.x = random() * width; // x-coordinate
  this.y = (random() * height) - height; //y-coordinate
  this.r = randomFromTo(10, 30); //radius;
  this.d = (random() * MAX_PARTICLES) + 10; //density;
  this.color = color;
  this.tilt = Math.floor(random() * 10) - 10;
  this.tiltAngleIncremental = (random() * 0.07) + 0.05;
  this.tiltAngle = 0;

  this.draw = function () {
    ctx.beginPath();
    ctx.lineWidth = this.r / 2;
    ctx.strokeStyle = this.color;
    ctx.moveTo(this.x + this.tilt + (this.r / 4), this.y);
    ctx.lineTo(this.x + this.tilt, this.y + this.tilt + (this.r / 4));
    return ctx.stroke();
  };
}

const colorGenerator = {
  colorIndex: 0,
  colorIncrementer: -1,
  colorThreshold: 10,
  getColor() {
    this.colorIncrementer = (this.colorIncrementer + 1) % 10;

    if (!this.colorIncrementer) {
      this.colorIndex = (this.colorIndex + 1) % COLORS.length;
    }

    return COLORS[this.colorIndex];
  }
};

export default Ember.Component.extend({
  tagName: 'canvas',
  classNames: ['confetti'],

  particles: computed(function() {
    let particles = [];

    for (var i = 0; i < MAX_PARTICLES; i++) {
      particles.push(new ConfettiParticle({
        color: colorGenerator.getColor(),
        width: this.get('windowWidth'),
        height: this.get('windowHeight'),
        ctx: this.get('context')
      }));
    }

    return particles;
  }),

  didInsertElement() {
    this._super(...arguments);

    //canvas init
    var canvas = this.$().get(0);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    this.setProperties({
      context: canvas.getContext("2d"),
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      angle: 0,
      tiltAngle: 0
    });

    this.animationLoop();
  },

  draw() {
    this.get('context').clearRect(0, 0, this.get('windowWidth'), this.get('windowHeight'));

    var results = this.get('particles').map(p => p.draw());

    this.update();

    return results;
  },

  update() {
    var remainingFlakes = 0;
    var particle;
    this.incrementProperty('angle', 0.01);
    this.incrementProperty('tiltAngle', 0.1);

    for (var i = 0; i < MAX_PARTICLES; i++) {
      particle = this.get('particles')[i];

      this.stepParticle(particle, i);

      if (particle.y <= this.get('windowHeight')) {
        remainingFlakes++;
      }
      this.checkForReposition(particle, i);
    }
  },

  checkForReposition(particle, index) {
    if (particle.x > this.get('windowWidth') + 20 || particle.x < -20 || particle.y > this.get('windowHeight')) {
      if (index % 5 > 0 || index % 2 === 0) {
        //66.67% of the flakes
        this.repositionParticle(particle, random() * this.get('windowWidth'), -10, Math.floor(random() * 10) - 10);
      } else {
        if (Math.sin(this.get('angle')) > 0) {
          // enter from the left
          this.repositionParticle(particle, -5, random() * this.get('windowHeight'), Math.floor(random() * 10) - 10);
        } else {
          // enter from the right
          this.repositionParticle(particle, this.get('windowWidth') + 5, random() * this.get('windowHeight'), Math.floor(random() * 10) - 10);
        }
      }
    }
  },

  stepParticle(particle, particleIndex) {
    particle.tiltAngle += particle.tiltAngleIncremental;
    particle.y += (Math.cos(this.get('angle') + particle.d) + 3 + particle.r / 2) / 2;
    particle.x += Math.sin(this.get('angle'));
    particle.tilt = (Math.sin(particle.tiltAngle - (particleIndex / 3))) * 15;
  },

  repositionParticle(particle, xCoordinate, yCoordinate, tilt) {
    particle.x = xCoordinate;
    particle.y = yCoordinate;
    particle.tilt = tilt;
  },

  animationLoop() {
    if (this.isDestroyed || this.isDestroying) {
      return;
    }

    raf(Ember.run.bind(this, 'animationLoop'));

    return this.draw();
  }
});
