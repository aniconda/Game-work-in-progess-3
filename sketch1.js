var Runner1Animation, track, runner1;
var Runner2Animation, runner2;
var Runner3Animation, runner3;
var runners = [];

function preload() {
    Runner1Animation = loadAnimation("./assets/Runner1_1.png","./assets/Runner1_2.png","./assets/Runner1_3.png","./assets/Runner1_4.png","./assets/Runner1_5.png");
    track = loadImage("./assets/track.png");
    Runner2Animation = loadAnimation("./assets/Runner2_1.png","./assets/Runner2_2.png","./assets/Runner2_3.png","./assets/Runner2_4.png","./assets/Runner2_5.png");
    Runner3Animation = loadAnimation("./assets/Runner3_1.png","./assets/Runner3_2.png","./assets/Runner3_3.png","./assets/Runner3_4.png","./assets/Runner3_5.png");
  }

function setup() {
    createCanvas(1000,1000);
    runner1 = createSprite(200,500,50,50);
    runner1.addImage(Runner1Animation);
    runner1.scale = 0.97;

    runner2 = createSprite(400,500)
    runner2.addAnimation("Runner2", Runner2Animation);
    runner2.scale = 0.92;

    runner3 = createSprite(600,500)
    runner3.addAnimation("Runner3", Runner3Animation);
    runner3.scale = 1.7;
   
}
function draw() {
    background("black");
   
    if(keyIsDown(UP_ARROW)){
        runner1.y+= 5;
        console.log(runner1.y)
    }
    drawSprites();
}