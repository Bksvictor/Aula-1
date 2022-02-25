
var imgquadreado

function preload(){
imgquadrado= loadImage("./images/gameOver.png")

}

function setup(){
    createCanvas(500,500)
    background(0)
var quadrado= createSprite(250,250,20,20);
// quadrado.shapeColor= "red"
quadrado.addImage(imgquadrado)
quadrado.scale = 0.3
} 

function draw(){ 
drawSprites()

}