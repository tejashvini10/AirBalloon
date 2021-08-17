var database,position;
var balloon,background,background_img,balloonImage1,balloonImage2;
var balloon1,balloon2;

function preload() {

background_img=loadImage("Hot Air Ballon-01.png");
balloonImage1=loadAnimation("Hot Air Ballon-02.png");
balloonImage2=loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-02.png","Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-03.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png","Hot Air Ballon-04.png","Hot Air Ballon-04.png");

}

function setup() {
  database=firebase.database();
  createCanvas(1000,700);
  balloon =createSprite(400, 200, 50, 50);
 balloon.addAnimation("balloon",balloonImage1);
balloon.scale=0.5;
textSize(20); 
var ballpos = database.ref('balloon/position')
ballpos.on('value',readposition,showerror)

}



function draw() {
  background(background_img);  

  if(keyDown(LEFT_ARROW)){
    changePosition(-10,0);
    balloon.addAnimation("hotAirBalloon",balloonImage2);

  }
 else if(keyDown(RIGHT_ARROW)){
  changePosition(10,0);
  balloon.addAnimation("hotAirBalloon",balloonImage2);

 }
 else if(keyDown(UP_ARROW)){
  changePosition(0,-10);
  balloon.scale=balloon.scale -0.005
 }
 else if(keyDown(DOWN_ARROW)){
  changePosition(0,+10);
  balloon.scale=balloon.scale+0.005;
 }
 

  drawSprites();
  textSize(15);
 fill("black");
 stroke("white");
 text("Use Arrow keys to move the hot Air balloon",200,50);

}
function changePosition(x,y){
  database.ref('balloon/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}

function readposition(data){

position = data.val()
balloon.x = position.x
balloon.y = position.y

}
function showerror(){
console.log("Error occurred check your code")

}