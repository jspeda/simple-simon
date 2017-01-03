$(document).ready(function() {

var Simon = {
  init: function() {
    this.colors = ["green", "red", "yellow", "blue"];
    this.round = 0;
    this.previous = [];
    this.userInput = [];
    this.strict = false;
  }
};

var Game = Object.create(Simon);

Game.start = function() {
  Game.newRound();
  this.round++;
  if (this.round <= 25) {
    if (this.userInput.length < this.previous.length) {
      Game.getUserInput();
    }
    else if (this.userInput.length === this.previous.length) {
      console.log("length is the same");
      var correct = Game.checkForEquals(this.userInput, this.previous);

      if (correct === true) {
        Game.newRound();
        this.round++;
      }

      if (correct === false) {
        // go back to previous round unless strict mode is on, in which case
        // restart the entire game.
      }
    }
  }
  else {
    console.log("restarting!");
    Game.restart();
  }
}

Game.newRound = function() {
  this.previous.push(this.colors[Math.floor(Math.random() * (4 - 0) + 0)]);
  console.log(this.previous);
  this.userInput = [];
  var simonSays = setInterval(function() {
    // flash game pieces on board.
  }.bind(this), 1000);
};

Game.getUserInput = function() {
  var that = this; // fix this to make kyle simpson happy
  $('.green, .red, .yellow, .blue').click(function() {
    console.log('clicked');
    input = true;
    var selectedClass = $(this).attr('class');
    that.userInput.push(selectedClass);
    $(that).addClass('.light');
    console.log(that.userInput);
    console.log("user input length is " + that.userInput.length + " and prev length is " + that.previous.length);

  });
}

Game.checkForEquals = function(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

  // console.log($('.' + this.previous[1]).attr('class'));
  // if ($("." + this.previous[1]).data('clicked') === true) {
  //   console.log('yes');
  // }
  // var simonSays = setInterval(function() {
  //   $('.green, .red, .blue, .yellow').css('background', '');
  //   var selection = this.colors[Math.floor(Math.random() * (4 - 0) + 0)];
  //   console.log(selection);
  //   this.previous.push(selection);
  //   $("." + this.colors[selection]).html('boop');
  //   $('.count').html(this.count + 1);
  //   this.count++;
  //   if (this.count === 1) {
  //     clearInterval(simonSays);
  //     console.log(this.previous);
  //   }
  // }.bind(this), 1000);

Game.strict = function() {

};

Game.restart = function() {
  Game.init();
  Game.start();
};

Game.init();

$('.start').click(function() {
  Game.start();
});

$('.strict').click(function() {
  // strict = true/false maybe
});


// $('.green, .red, .yellow, .blue').mousedown(function() {
//   $(this).data('clicked', true);
//   console.log("clicked " + $(this).attr('class'));
//   // $(this).css('background', 'rgba(0,0,0,0.05)');
//   //background: rgba(0,0,0,0.1);
// });


});
