$(document).ready(function() {

var Simon = {
  init: function() {
    this.colors = ["green", "red", "yellow", "blue"];
    this.count = 0;
    this.previous = [];
    this.userInput = [];
  }
};

var Game = Object.create(Simon);

Game.start = function() {
  // while (this.previous.length < 25) {
  //   var generator = this.colors[Math.floor(Math.random() * (4 - 0) + 0)];
  //   this.previous.push(generator);
  //   // console.log(this.previous);
  // };
  for (var i = 0; i < 25; i++) {
    this.previous.push(this.colors[Math.floor(Math.random() * (4 - 0) + 0)]);
    console.log(this.previous); // wrap this in setinterval to display...
    // if user input is not equal to contents of the array ... somehow
    // do not move on? 
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
};

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


$('.green, .red, .yellow, .blue').mousedown(function() {
  $(this).data('clicked', true);
  console.log("clicked " + $(this).attr('class'));
  // $(this).css('background', 'rgba(0,0,0,0.05)');
  //background: rgba(0,0,0,0.1);
});


});
