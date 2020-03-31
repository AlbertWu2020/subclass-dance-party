var makePopDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"><img src="images/image (1)-40x60.png"/><p class="dance-king">Dancing King</p></span>')
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  this.oldStep = makeDancer.prototype.step;
  //this.step();
  this.setPosition(top, left);
};

makePopDancer.prototype = Object.create(makeDancer.prototype);
makePopDancer.prototype.constructor = makePopDancer;

makePopDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggleClass('pop');
};

makePopDancer.prototype.lineUp = function(t,l,x) {
  this.setPosition('30%', x+'rem');
}