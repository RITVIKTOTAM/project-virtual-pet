class Form{

  constructor(){

    
    this.button = createButton("Addfood");
    this.button1 = createButton("feedfood");
    car2Image = loadImage("images/Milk.png");

  }

  display(){

   
   
   this.button.position(580,230);
   this.button.mousePressed(() =>
   {

    
    milk2 = createSprite(330,350,30,80);
    milk2.addImage(car2Image);
    milk3 = createSprite(360,350,30,80);
    milk3.addImage(car2Image);
    milk4 = createSprite(390,350,30,80);
    milk4.addImage(car2Image);
  


   })
   
   this.button1.position(650,230);
   this.button1.mousePressed(() =>
   {

    
    milk2.x = 780;
    milk3.x = 780;
    milk4.x = 780;
  


   })

  }


  
}