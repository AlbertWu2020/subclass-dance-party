var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  console.log('blinky this', arguments);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps;
  this.$node = $('<span class="dancer"><img style="width: 95px;" src="images/carlton.gif"/><p class="dance-king">Dancing King</p></span>');
  // this.step = makeDancer.prototype.step;
  makeDancer.prototype.setPosition.call(this, top, left);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggleClass('blinky');
};

