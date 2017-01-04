$(document).ready(function() {

var Simon = {
  init: function() {
    this.colors = ["green", "red", "yellow", "blue"];
    this.round = 0;
    this.previous = [];
    this.userInput = [];
    this.strict = false;
    this.started = false;
  }
};

var Game = Object.create(Simon);

Game.start = function() {
  Game.newRound();
  this.round++;
};

Game.newRound = function() {
  this.previous.push(this.colors[Math.floor(Math.random() * (4 - 0) + 0)]);
  console.log(this.previous);
  this.userInput = [];
  $('.count').html("Round: " + (this.round + 1));
  var simonSays = setInterval(function() {
    // FLASH BUTTONS ON THE SCREEN
  }.bind(this), 1000);
};

Game.getUserInput = function(color) {
    this.userInput.push(color);
};

Game.checkForEquals = function(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

Game.strictMode = function() {
  this.strict = !this.strict;
  console.log(this.strict);
};

Game.restart = function() {
  Game.init();
  Game.start();
};

Game.init();

$('.start').click(function() {
  Game.started = !Game.started;
  if (Game.started === true) {
    Game.restart();
  }
  else {
    Game.start();
  }
});

$('.strict').click(function() {
  // don't allow clicking unless game has already started.
  Game.strictMode();
});

$('.green, .red, .yellow, .blue').mousedown(function() {
  $(this).data('clicked', true);
  var selection = $(this).attr('class');
  console.log("clicked " + selection);
  Game.getUserInput(selection);
  if (Game.userInput.length === Game.previous.length) {
    var correct = Game.checkForEquals(Game.userInput, Game.previous);
    if (correct === true) {
      Game.newRound();
      Game.round++;
      console.log("GOOD JOB");
    }
    else {
      // clear userInput, repeat game array
      // if strict mode is active, restart whole game
      if (Game.strict === false) {
        console.log("WRONG");
        Game.userInput = [];
        console.log(Game.previous);
        console.log(Game.strict);
      }
      else {
        console.log("you lose w strict mode");
        Game.restart();
      }
    }
  }
  if (Game.round > 3) {
    console.log("YOU WIN");
    Game.init();
    Game.start();
  }
});


});
