var makeHappyDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"><img style="width:80px" src="images/bmo.gif"/><p class="dance-king">Dancing King</p></span>');
  this.oldStep = makeDancer.prototype.step;
  this.setPosition(top,left);
};

makeHappyDancer.prototype = Object.create(makeDancer.prototype);
makeHappyDancer.prototype.constructor = makeHappyDancer;

makeHappyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggleClass('happy');
};
