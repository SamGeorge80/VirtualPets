var happyDog; 
var database; 
var foodS; 
var foodStock;
function preload() { 
dogImg = loadImage("images/dogImg.png"); 
happyDogImg = loadImage("images/dogImg1.png"); 
} 
function setup() { 
createCanvas(800,500); 
database = firebase.database();
 dog=createSprite(width/2,250,10,10); 
dog.addImage("dog",dogImg); dog.scale=0.15; 
foodStock=database.ref('food'); 
foodStock.on("value",readStock); 
textSize(20); 
} 
function draw() { 
background(46,139,87);

if(keyWentDown(UP_ARROW)){ 
writeStock(foodS);
 dog.addImage(happyDogImg);
}
drawSprites();
textSize(25); 
fill("white");
stroke("white"); 
text("Food remaining : "+foodS,170,200); 
textSize(13); 
text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
} 
function readStock(data){ 
foodS=data.val(); 
}
function writeStock(x){ 
if(x<=0){ x=0; }
else{ x=x-1; } database.ref('/').update({ food:x })
}

