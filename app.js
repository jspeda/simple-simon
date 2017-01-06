$(document).ready(function() {

var green = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var red = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var yellow = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var blue = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

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
  Game.displayPieces();
};

Game.displayPieces = function() {
  var i = 0;
  setTimeout(function() {
    (function lightUp() {
      console.log(i);
      $("#" + Game.previous[i]).addClass('light');
      if (Game.previous[i] === 'green') {
        green.play();
      }
      else if (Game.previous[i] === 'red') {
        red.play();
      }
      else if (Game.previous[i] === 'yellow') {
        yellow.play();
      }
      else if (Game.previous[i] === 'blue') {
        blue.play();
      }
      setTimeout(function() {
        $('#' + Game.previous[i]).removeClass('light');
      }, 200);
      console.log($('#' + Game.previous[i]));
      if (++i < Game.previous.length) {
        setTimeout(lightUp, 1000);
      }
    })();
  }, 800);
}

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
  Game.strictMode();
  if (Game.strict === true) $('.strict').html("strict ON");
  else $('.strict').html("strict OFF");
});

$('#green, #red, #yellow, #blue').mousedown(function() {
  var selection = $(this).attr('id');
  console.log("clicked " + selection);
  $(this).removeClass('light');
  Game.getUserInput(selection);
  if (Game.userInput.length === Game.previous.length) {
    var correct = Game.checkForEquals(Game.userInput, Game.previous);
    if (correct === true) {
      Game.newRound();
      Game.round++;
      console.log("GOOD JOB");
    }
    else {
      if (Game.strict === false) {
        $('.count').html("Try again!");
        Game.userInput = [];
        Game.displayPieces();
        console.log(Game.previous);
        console.log(Game.strict);
      }
      else {
        $('.count').html("Restarting");
        setTimeout(function() {
          Game.restart();
          Game.strict = true;
        }, 2000)
      }
    }
  }
  if (Game.round > 10) {
    console.log("YOU WIN");
    Game.init();
    Game.start();
  }
});
});
