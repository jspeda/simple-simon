$(document).ready(function() {

var Simon = {
  init: function() {
    this.colors = ["green", "red", "yellow", "blue"];
    this.count = 0;
    this.previous = [];
  }
};

var Game = Object.create(Simon);

Game.start = function() {
  var simonSays = setInterval(function() {
    $('.green, .red, .blue, .yellow').css('background-color', '');
    var selection = this.colors[Math.floor(Math.random() * (4 - 0) + 0)];
    console.log(selection);
    this.previous.push(selection);

    $("." + this.colors[selection]).css('background-color', 'rgba(0,0,0,0)');
    this.count++;
    if (this.count === 25) {
      clearInterval(simonSays);
      console.log(this.previous);
    }
  }.bind(this), 1000);
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
  console.log("clicked " + $(this).attr('class'));
  // $(this).css('background', 'rgba(0,0,0,0.05)');
  //background: rgba(0,0,0,0.1);
});


});
