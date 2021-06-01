var canvas;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var  Rhand = true, Phand, Shand; //hands
var  Rhand1, Phand1, Shand1; //hands1

var rhand, phand, shand; //Hands
var rhand1, phand1, shand1; //Hands1

var rock, paper, sci // buttons
var rock1, paper1, sci1; // buttons1

var rockImg, paperImg,sciImg // images
var rock1Img, paper1Img, sci1Img; // images1

var form, player, game;

var Rcheck = false;  //-
var Pcheck = false;  //- Check
var Scheck = false;  //-

var Rcheck1 = false;  //-
var Pcheck1 = false;  //- Check1
var Scheck1 = false;  //-

var rcheck = false;  //-
var pcheck = false;  //- check
var scheck = false;  //-

var rcheck1 = false;  //-
var pcheck1 = false;  //- check1
var scheck1 = false;  //-
function preload(){
    rockImg = loadImage("images/rock1.png");      //-
    paperImg = loadImage("images/paper1.png");    //-  load Images
    sciImg = loadImage("images/sci1.png");        //-
    
    rock1Img = loadImage("images/rock2.png");     //-
    paper1Img = loadImage("images/paper2.png");   //-  load Images1
    sci1Img = loadImage("images/sci2.png");       //-

    backg = loadImage("images/bg.png");
}

function setup (){
   canvas = createCanvas(1200, 700);
   background("pink");
   database = firebase.database();
   game = new Game();
   game.getState();
   game.start();
   
}

function draw(){
    
    
    if(playerCount === 2){
      game.update(1);
    }
    if(gameState === 1){
       clear();
       game.play();
    }
    if(gameState === 2){
        game.end();
    }
    
    drawSprites();
}
//buttons functions
function rockFunction(){
    
    if(Pcheck === true || Scheck === true || Rcheck === true){
        if(Pcheck === true){
            Phand.visible = false;
            Pcheck = false;
        }
        if(Scheck === true){
            Shand.visible = false;
            Scheck = false;
        }
        if(Rcheck === true){
            Rhand.visible = false;
            Rcheck = false;
        }
        }
        Rcheck = true;
        Rhand = createSprite(displayWidth/2 - 500, displayHeight/2, 100, 100);
        Rhand.addImage(rockImg);
        player.choice = "rock";
        player.update();
    }
    
function paperFunction(){
    
    if(Rcheck === true || Scheck === true || Pcheck === true){
        if(Rcheck === true){
            Rhand.visible = false;
            Rcheck = false;
        }
        if(Scheck === true){
            Shand.visible = false;
            Scheck = false;
        }  
        if(Pcheck === true){
            Phand.visible = false;
            Pcheck = false;
        }  
        }
        Pcheck =  true;
        Phand = createSprite(displayWidth/2 - 500, displayHeight/2, 100, 100);
        Phand.addImage(paperImg);
        player.choice = "paper";
        player.update();
    }
    
function sciFunction(){
    
    if(Rcheck === true || Pcheck === true || Scheck === true){
        if(Rcheck === true){
            Rhand.visible = false;
            Rcheck = false;
        }
        if(Pcheck === true){
            Phand.visible = false;
            Pcheck = false;
        }   
        if(Scheck === true){
            Shand.visible = false;
            Scheck = false;
        }   
        }
        Scheck = true;
        Shand = createSprite(displayWidth/2 - 500, displayHeight/2, 100, 100);
        Shand.addImage(sciImg);
        player.choice = "sci";
        player.update();
    } 

//buttons1 functions
function rock1Function(){

    if(Pcheck1 === true || Scheck1 === true || Rcheck1 === true){
        if(Pcheck1 === true){
            Phand1.visible = false;
            Pcheck1 = false;
        }
        if(Scheck1 === true){
            Shand1.visible = false;
            Scheck1 = false;
        }
        if(Rcheck1 === true){
            Rhand1.visible = false;
            Rcheck1 = false;
        }
        }
        Rcheck1 = true;
        Rhand1 = createSprite(740, 540, 100, 100);
        Rhand1.addImage(rock1Img); 
        player.choice = "rock1";
        player.update();  
    }
        
function paper1Function(){
    
    if(Rcheck1 === true || Scheck1 === true || Pceck1 === true){
        if(Rcheck1 === true){
            Rhand1.visible = false;
            Rcheck1 = false;
        }
        if(Scheck1 === true){
            Shand1.visible = false;
            Scheck1 = false;
        }   
        if(Pcheck1 === true){
            Phand1.visible = false;
            Pcheck1 = false;
        }  
        }
        Pcheck1 =  true;
        Phand1 = createSprite(740, 540, 100, 100);
        Phand1.addImage(paper1Img);
        player.choice = "paper1";
        player.update();
    }
        
function sci1Function(){ 
    
    if(Rcheck1 === true || Pcheck1 === true || Scheck1 === true){
        if(Rcheck1 === true){
            Rhand1.visible = false;
            Rcheck1 = false;
        }
        if(Pcheck1 === true){
            Phand1.visible = false;
            Pcheck1 = false;
        }   
        if(Scheck1 === true){
            Shand1.visible = false;
            Scheck1 = false;
        }  
        }
        Scheck1 = true;
        Shand1 = createSprite(740, 540, 100, 100);
        Shand1.addImage(sci1Img);
        player.choice = "sci1";
        player.update();
    }

