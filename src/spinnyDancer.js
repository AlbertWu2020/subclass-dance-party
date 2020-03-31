var makeSpinnyDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"><img style="width:80px" src="images/snoop.gif"/><p class="dance-king">Dancing King</p></span>');
  this.oldStep = makeDancer.prototype.step;
  this.setPosition(top,left);
};

makeSpinnyDancer.prototype = Object.create(makeDancer.prototype);
makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;

makeSpinnyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggleClass('spinny');
};

