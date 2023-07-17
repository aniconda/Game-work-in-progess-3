var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var blastImage;
var form, player, playerCount;
var allPlayers, runner1, runner2, fuels, powerCoins, obstacles,game;
var Runner1Animation, track, runner1;
var Runner2Animation, runner2;
var Runner3Animation, runner3;
var runners = [];

function preload() {
  //backgroundImage = loadImage("./assets/background.png");
  Runner1Animation = loadAnimation("./assets/Runner1_1.png", "./assets/Runner1_2.png", "./assets/Runner1_3.png", "./assets/Runner1_4.png", "./assets/Runner1_5.png");
  track = loadImage("./assets/track.png");
  Runner2Animation = loadAnimation("./assets/Runner2_1.png","./assets/Runner2_2.png","./assets/Runner2_3.png","./assets/Runner2_4.png","./assets/Runner2_5.png");
  Runner3Animation = loadAnimation("./assets/Runner3_1.png","./assets/Runner3_2.png","./assets/Runner3_3.png","./assets/Runner3_4.png","./assets/Runner3_5.png");
  
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
  lifeImage = loadImage("./assets/life.png");
  blastImage = loadImage("./assets/blast.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background("white");
  if (playerCount === 3) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
