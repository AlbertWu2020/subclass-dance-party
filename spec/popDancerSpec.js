describe('popDancer', function() {

  var popDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    popDancer = new makePopDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(popDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(popDancer.$node, 'toggleClass');
    popDancer.step();
    expect(popDancer.$node.toggleClass.called).to.be.true;
  });

  it('should have a setPosition method', function() {
    expect(popDancer.setPosition).to.be.a('function');
  });

  it('should have a lineUp method', function() {
    expect(popDancer.lineUp).to.be.a('function');
  });

  it('should be instance of prototype', function() {
    expect(makePopDancer.prototype).to.equal(popDancer.__proto__);
    expect(popDancer).to.be.an.instanceOf(makePopDancer);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(popDancer, 'step');
      expect(popDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(popDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(popDancer.step.callCount).to.be.equal(2);
    });
  });
});
