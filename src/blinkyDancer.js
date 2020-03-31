var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps;
  this.$node = $('<span class="dancer"><img style="width: 75px;" src="images/carlton.gif"/><p class="dance-king">Dancing King</p></span>');
  this.oldStep = makeDancer.prototype.step;
  this.setPosition(top, left);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggleClass('blinky');
};