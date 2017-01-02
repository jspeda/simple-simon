$(document).ready(function() {

var Simon = {
  init: function() {
    this.colors = ["green", "red", "yellow", "blue"];
    this.round = 0;
    this.previous = [];
    this.userInput = [];
  }
};

var Game = Object.create(Simon);

Game.start = function() {
  var i = 0;
  Game.newRound();
    var input = false;
    if (input === false && this.userInput.length < this.previous.length) {
      Game.getUserInput();
    }
    // else if input is true and the arrays are equal -> next round and ++round
    // else if round is 25, end the game. 
  }

  Game.newRound = function() {
    this.previous.push(this.colors[Math.floor(Math.random() * (4 - 0) + 0)]);
    console.log(this.previous);
    var simonSays = setInterval(function() {
      // flash game pieces on board.
    }.bind(this), 1000);
  };

  Game.getUserInput = function() {
    var that = this; // fix this to make kyle simpson happy
    $('.green, .red, .yellow, .blue').click(function() {
      console.log('clicked');
      var selectedClass = $(this).attr('class');
      that.userInput.push(selectedClass);
      $(that).addClass('.light');
      console.log(that.userInput);
    });
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
