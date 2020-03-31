// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  console.log('dancer this', arguments);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"><p class="dance-king">Dancing King</p></span>');
  this.step();
  this.setPosition(this.top, this.left);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(top, left, x) {
  var multiplier = (x * 25);
  this.setPosition('50%', multiplier);
  // this.$node.animate({this.setPostition}, 1000);
};