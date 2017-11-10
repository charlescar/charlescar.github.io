var hedgehog;
var maze1;
var x = 0;
var y = 0;
var z = 0;
var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var q = 0;
var e = 0;
var hedgehogs = [];
var mazes = [];
var boxes = [];
var playerImage;

var player = {
  x: 20,
  y: 180,
  display: function() {
    image(playerImage, this.x, this.y, playerImage.width/8, playerImage.height/8);
  }
}


function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB);
  hedgehog = loadImage("hedgehog1.png");
  playerImage = loadImage("waluigi1.png");
  maze1 = loadImage("Maze1.png");
  for(var i = 0; i < 5; i++) {
    hedgehogs[i] = new Hedgehog();
  }

  for(var i = 0; i < 10; i++) {
    mazes[i] = new Maze();
  }
}

function draw() {
  background(266, 100, 33);



  image(maze1, 0, 120);


  //console.log(canIGoToThisSquare(player.x+playerImage.width/8+1, player.y));
  //player.x++;
  checkMove();
  player.display();

  //USER INTERFACE
  userInterface();

  //LEVEL ONE
  fill(255);
  textSize(20);
  text("Level 1", 50, 65);

  for(var i = 0; i < hedgehogs.length; i++) {
    hedgehogs[i].display();
    hedgehogs[i].move();
  }
}

function Hedgehog() {
  this.x = random(width);
  this.y = random(height);
  this.speed = random(10);
  this.display = function() {
    image(hedgehog, this.x, this.y, hedgehog.width/8, hedgehog.height/8);
  }
  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

};

function Maze() {
  this.x = random(width);
  this.y = random(height);
  this.display = function() {
    fill(random(360), random(360), random(360));
    rect(random(1000), random(880), random(250), random(250));
  }
}

function userInterface() {
  noStroke();
  fill(250, 100, 62);
  rect(0, 0, 1000, 120);

  noStroke();
  fill(225, 215, 15)
  rect(7.5, 10, 985, 100);

  noStroke();
  fill(143, 100, 100);
  rect(12.5, 15, 975, 90);


}

function canIGoToThisSquare(x, y) {
  // is the color of the maze black at the space x, y?
  var c = get(x, y);
  var black = color(0);
  if (red(c) == 0 && green(c) == 0 && blue(c) == 0) {
    return false;
  }
  else {
    return true;
  }
}

//PLAYER MOVEMENT CONTROLS
function checkMove() {

  // d key - moving right
  //if (keyIsDown(68)) {
  //player.x++;
    if(canIGoToThisSquare(player.x+playerImage.width/8+1, player.y+5))  {
      //player.x+=1;
      console.log("should be moving")
    }
    else {
      console.log("stop")
    }
  //}
  if (keyIsDown(65)) {
    console.log("checking a")
    if(canIGoToThisSquare(player.x-1, player.y) === true) {
      player.x-=1;
    }

  }
  if (keyIsDown(87)) {
    if(canIGoToThisSquare(player.x, player.y+1) === true) {
      player.y-=1;
    }

  }
  if (keyIsDown(83)) {
    if(canIGoToThisSquare(player.x, player.y-1) === true) {
      player.y+=1;
    }

  }

}
