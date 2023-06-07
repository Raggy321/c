


var backgroundIMG
var alienShip1IMG, alienShip
var alienShip2IMG
var alienShip3IMG
var spaceShipIMG,spaceShip
var bullet
var bullets = []
var aliens = []
var score = 0
var lives = 3
var bulletSound
var canShoot = true

function preload() {
  backgroundIMG = loadImage('/assets/background.png')
  alienShip1IMG = loadImage('/assets/alienShip1.png')
  alienShip2IMG = loadImage('/assets/alienShip2.png')
  alienShip3IMG = loadImage('/assets/alienShip3.png')

  spaceShipIMG = loadImage('/assets/spaceShip.png')

  bulletSound = loadSound('/assets/laserSound.wav')


}


function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(windowWidth, windowHeight)

  spaceShip = createSprite(width/2,height-100)
  spaceShip.addImage(spaceShipIMG)
  spaceShip.scale = 0.3

}

function draw() {
  background(backgroundIMG);



  textSize(30)
  text("Score: " + score, 20, 40)
  text("Lives: " + lives, width-150, 40)
  
//control of the space ship
  if(keyIsDown(LEFT_ARROW)){
    spaceShip.x = spaceShip.x - 5
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    spaceShip.x = spaceShip.x + 5
  }

  for(var i = 0; i < aliens.length; i++){
    if(aliens[i].y>height){
      lives = lives - 1
    }
    for(var j = 0; j < bullets.length; j++){
      if(bullets[j].collide(aliens[i])){
        bullets[j].destroy()
        aliens[i].destroy()
        aliens.splice(i,1)
        bullets.splice(j,1)
        score = score + 10
      }
    }

  }
  gameOver()
  alienShips()
  drawSprites();
}

function alienShips() {
  if(World.frameCount%100 == 0){
    alienShip = createSprite(random(0, width - 50), (-50, -100))

  alienShip.velocityY = 5
  
  var randomNumber = Math.floor(Math.random() * 3)
  console.log(randomNumber)
  switch(randomNumber){
    case 0: alienShip.addImage(alienShip1IMG)
    break;
    case 1: alienShip.addImage(alienShip2IMG)
    break;
    case 2: alienShip.addImage(alienShip3IMG)
    break;

  }
  alienShip.scale = 0.3 
  aliens.push(alienShip)
}
} 

function gameOver() {

  if(lives == 0){
    
  }
  
}



function keyPressed() {
  if(keyCode === UP_ARROW && canShoot){
    bullet = createSprite(spaceShip.x, spaceShip.y,20,50)
    bullet.shapeColor = "#FCCF3E"
    bullet.velocityY = -10
    bullets.push(bullet)
    bulletSound.play()
    canShoot = false
    setTimeout(function(){
      canShoot = true
    },1300)
    
  }
  
}
function alienHit() {

}

function start(){

}
