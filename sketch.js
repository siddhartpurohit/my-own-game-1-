var sprites,boy;
var healht =[];
var healhtLevel =100;
var danger
var boyImg
var boyI
var background1Img
var background1
var comment
var healhtImg;
var dangerImg;
var bear;
var bearSprite;
var bag =["honey"];
function preload(){
boyImg = loadImage("y.jpg");
background1Img = loadImage("p.jpg");
healhtImg = loadImage("z.jpg");
dangerImg = loadImage("d.jpg")
}
function setup() {
  createCanvas(2000,1000);
  for(var i=50;i<400;i=i+50){
    sprites = createSprite(i,200,10,10);
    sprites.addImage(healhtImg)
    sprites.scale = 0.1
    healht.push(sprites);
  }
  bear = new Bear(400,500);

  boy = createSprite(1000,800,10,10);
  boy.addImage(boyImg);
  boy.scale = 0.6
  danger = createSprite(300,100,50,50);
 danger.addImage(dangerImg);
 bearSprite = createSprite(800,800,50,50);
 bearSprite.visible = false
 bearSprite.x = bear.x;
 bearSprite.y = bear.y;
}

function draw() {
  background(background1Img);
  
if(keyDown(UP_ARROW)){
      boy.y = boy.y-5
} 
if(keyDown(DOWN_ARROW)){
  boy.y = boy.y+5;


}

if(keyDown(RIGHT_ARROW)){
      boy.x = boy.x+5;
}
if(keyDown(LEFT_ARROW)){
      boy.x = boy.x-5;
}
//pacifying the bear;
console.log(bear)
if(boy.isTouching(bearSprite)){
       for(var item in bag){
            if (bag[item] ==="honey"){
                bear.mood = "calm"
            }
             
       }
 if(bear.mood==="attack"){
   boy.healht = boy.healht-5;
 }
}

//camera.position.y = boy.position.y
  //increasing healht on touching healht;
  if(healhtLevel<100){
       for(var i=0;i<=6;i++){
        if(boy.isTouching(healht[i])){
          healht[i].destroy();
          healhtLevel = healhtLevel+20;
        } 
    }
    
 }
       
  if(boy.isTouching(danger)&&healhtLevel>10){
        healhtLevel = healhtLevel-2;
        
  }
  bear.display();
  drawSprites();
}