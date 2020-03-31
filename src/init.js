$(document).ready(function() {
  window.dancers = [];

  $(document).on('click', '.dancer', function(e) {
    console.log(e);
    $(e.currentTarget.lastChild).toggleClass('dance-king');
  });

  $(document).on('mouseover', '.dancer :first-child', function(e) {
    $(e.currentTarget).toggleClass('bigger');
  })

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      1000
      // Math.random() * 1000
    );
    console.log('dancer', dancer);
    $('.dancefloor').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineup').on('click', function(event) {
    for (var x = 0; x < window.dancers.length; x++) {
      var dancer = window.dancers[x];
      var lastDancer = window.dancers[x-1] || dancer;
      dancer.lineUp(dancer.top, dancer.left, x);
    }
  });

});

