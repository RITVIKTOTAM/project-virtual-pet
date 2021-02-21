var database;
var form,game;
var gameState = 0;
var milk1,milk2,milk3,milk4,backgroundImage,car1Image,car2Image,car3Image,car4Image,dog;

function preload(){

   
   car1Image = loadImage(happydog.png);
   car2Image = loadImage(Milk.png);
   car3Image = loadImage(milkImage.png);
   car4Image = loadImage(Dog.png);

}

function setup(){
    createCanvas(1000,700);
    database = firebase.database();
    game = new Game();
    game.start();

    dog = createSprite(800,350,50,100);
    dog.addImage(car4Image);
    milk1 = createSprite(300,350,5,5);
    milk1.addImage(car2Image);
    
    

    
  
}

function draw(){
    background("green");
    
   if(milk1.x = 300){

      dog.addImage(car4Image)

   }
  else{

    milk1.x = 300;
    dog.addImage(car1Image);
    milk1.visible = false;

  }
  

    drawSprites();
}


