//creating all the sprites

var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    //loading the music
    music = loadSound("music.mp3");
}


function setup(){
    //creating canvas
    canvas = createCanvas(850,600);

    // creating the blocks and giving them color
    block1 = createSprite(0,590,360,20);
    block1.shapeColor = "blue";

    block2 = createSprite(295,590,200,20);
    block2.shapeColor = "orange";

    block3 = createSprite(520,590,200,20);
    block3.shapeColor = "red";

    block4 = createSprite(750,590,200,20);
    block4.shapeColor = "yellow";

    //creating the ball,giving color and giving velocities 
    ball = createSprite(random(50,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 9;
    ball.velocityY = 9;

}

function draw() {
    //giving background color
    background(rgb(169,169,169));

    //creating edges
    edges = createEdgeSprites();

    //bouncing ball from the edges and the blocks
    ball.bounceOff(edges);
   
    
    //writing code to change the color of ball when touching block 1
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }

     //writing code to change the color of ball when touching block 1
    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        stop(music);
        
    }

     //writing code to change the color of ball when touching block 3
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        music.play();
        
    }

     //writing code to change the color of ball when touching block 4
     if(block4.isTouching(ball) && ball.bounceOff(block4)){
         ball.shapeColor = "yellow";
         stop(music);
         
     }

    drawSprites();
}
