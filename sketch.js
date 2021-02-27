
var dog,dogImage,happyDog,happyDogImage
var database
var foodStock,food,foodS
function preload(){
  dogImage=loadImage('Images/Dog.png');
  happyDogImage=loadImage('Images/HDog.png');

  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(500,500);

  dog=createSprite(250,300,150,150);
  dog.addImage('dog',dogImage);
  dog.addImage('HDog',happyDogImage)
  dog.scale=0.15;

  //Fetch the foodStock from the database you have created using the following syntax.
  database.ref('foodStack').on('value',function(data){
    foodS=data.val();
  });
  //see hint in point #5 in pdf
  textSize(20); 
}


function draw() {
  background(46,139,87);
 
  //Using UP_ARROW write the code to feed the dog.
  if(keyWentDown(UP_ARROW)){
writeStock(foodS);
  }
  if(keyWentUp(UP_ARROW)){
    dog.changeImage('dog',dogImage);

  }
  // call writeStock() inside it
//After feeding the dog, change the image of the dog to a happy image of the dog.
  drawSprites();
  //Use textSize to increase the size of the text, fill() to set text color and stroke() to outline the text.
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

//Function to read  foodStock from the database.
function readStock(data){
  database.ref('foodStack').on('value',function(data){
    foodS = data.val();
  })

}

//Function to write values in DB
function writeStock(x){
  if(x>0){
    x--;
    dog.changeImage('HDog',happyDogImage);
  }else{
x=0
database.ref('/').update({
  foodStack:x
})  } 
  database.ref('/').update({
    Food:x
  })
}
