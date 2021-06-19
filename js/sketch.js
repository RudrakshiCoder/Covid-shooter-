// creating canvas
var canvas;

// var for loading images
var startImg, bg1, insImg, bg2, backImg,  bg3, playImg, levelImg, infiniteImg, cityImg, covidImg;

// var for adding images.
var start, backgroundImg, instruction, backgroundImg2, back, backgroundImg3, play, level, infinite, city, covid;

// var for making title ,input and button;
var title, playerName, country;

// var for GameState.
var FORM = 1;
var INTRO = 2;
var INSTRUCT = 3;
var INFINITE = 4;
var PLAYGAMEINF = 5;



var gameState = 1;

function preload(){
  startImg = loadImage("Images/start.png");
  bg1 = loadImage("Images/backgroundImg.jpg");
  insImg = loadImage("Images/instructions.png ");
  bg2 = loadImage("Images/backgroundImg1.jpg");
  backImg = loadImage("Images/back.png");
  levelImg = loadImage("Images/levels.png");
  infiniteImg = loadImage("Images/infinite.png");  
  bg3 = loadImage("Images/backgroundImg2.jpg");
  playImg = loadImage("Images/play.png");
  cityImg = loadImage("Images/cityBg1.jpg");
  covidImg = loadImage("Images/covid.png");
 
 
}


function setup() {
 canvas = createCanvas(1500,700);


 // creating title
 title = createElement('h1');
 title.html("✨COVID SHOOTING GAME✨");
 title.position(500,65);

 // creating input for player name
 playerName = createInput("Name");
 playerName.position(670,235);

 // creating input for city
 country = createInput("Country");
 country.position(670,415);

 // sprite for start button.
 start = createSprite(756,600);
 start.addImage(startImg);
 start.scale = 0.5;
 
}

function draw() {
  background("lightPink");  

  // WHEN GAME STATE IS FORM
  if(gameState === 1){
     
    stroke("black");
    fill("black");
    textSize(20);
    text("Enter Your Name Here 👇👇",640,200);
    text("Enter Your Country Name Here 👇👇",610,380);
  }


  // Game state changing from FORM into INTRO
  if(mousePressedOver(start)&& gameState === 1){
    gameState = INTRO
  }

  //Game sate changing from INTRO to INSTRUCT
  if(mousePressedOver(instruction) && gameState === 2){
    gameState = INSTRUCT;
  }

  // game state changing from INSTRUCT to INTRO
  if(mousePressedOver(back) && gameState === 3){
    gameState = INTRO;
  }

  // game state changing from INTRO and INFINITE
  if(mousePressedOver(infinite) && gameState === 2){
    gameState = INFINITE;
  }

  // game state changing from INFINITE to PLAYGAMEINF
   if(mousePressedOver(play) && gameState === 4){
     gameState = PLAYGAMEINF;
   }


  
 // WHEN GAME STATE IS PLAYGAMEINF
if(gameState === PLAYGAMEINF){
    
  // to make the moving background
   //  to add background image
  //city = createSprite(750,250);
  //city.addImage(cityImg);
  //city.scale = 1.5;
  //city.velocityX = -3;
  

  
  // to create virus
    covid = createSprite(200,200,20,20);
    covid.addImage(covidImg);
    covid.scale = 0.1;
    covid.velocityX = 2;
   
    
    
  
}
  

 drawSprites();
  


  

 

  

  // WHEN GAME STATE IS INTRO
  if(gameState === INTRO){

    // to set the background.
   // backgroundImg = createSprite(780,380);
    //backgroundImg.addImage(bg1);
    //backgroundImg.scale = 2.7;

    // to hide FORM options
    hiding();

    // to hide start button
    start.visible = false;

    // to greet player and tell story
    stroke("black");
    fill("black");
    textSize(20);
    textFont("algerian");
    text("your  country  is  in  danger !!  there  is  a  deadly  virus🎇🎇",450,200);
    text("which  is  continuously  killing  many  residents  of  your  country",420,250);
    text("you  are  warrior  and  i  am  pretty  sure you  will  save  your  country",390,300);
    text("so  let's  do  this  mission👐",630,350);

    // to make the instruction button
    instruction = createSprite(1270,70,80,20);
    instruction.addImage(insImg);
    instruction.scale = 0.8;

    // to tell players about instruction button
    stroke("red");
    fill("red");
    textSize(20);
    textFont("comic sans");
    text("Choose any one mode",670,470);

    // to make level button
    level =createSprite(370,570);
    level.addImage(levelImg);
    level.scale = 0.2;

    // to make infinite button
    infinite = createSprite(1150,570);
    infinite.addImage(infiniteImg);
    infinite.scale = 0.2;

   


   

    
    
    

  }

  // WHEN GAME STATE IS INSTRUCT.
  if(gameState === 3){
    
    // to set the background image for INSTRUCT
    backgroundImg2 = createSprite(750,350);
    backgroundImg2.addImage(bg2);
    backgroundImg2.scale = 2;
     
    // To make instruction button invisible
    instruction.visible = false;

    // to tell the instructions
    stroke("black");
    fill("black");
    textSize(50);
    textFont("algerian");
    text("INSTRUCTIONS",640,100);

    stroke("blue");
    fill("blue");
    textSize(39);
    textFont("monotype corsiva");
    text("1. Use  right  and  left  arrow  key  to  move.",200,200);
    text("2. Complete the target given to you to defeat the virus.",200,250);
    text("3. Don't collide with virus !!",200,300);
    text("4. Collect coins 📀",200,350);
    text("5. There will be 2 modes of game 'levels' and 'infinite'.",200,400);
    text("Its you choice you can choose any mode😃",500,500);

    // to make back button
    back = createSprite(80,80);
    back.addImage(backImg);
    back.scale = 0.5;

   
  }

  // WHEN GAME STATE IS INFINITE
  if(gameState === 4){
    
    // to add background
    //backgroundImg3 = createSprite(750,350);
    //backgroundImg3.addImage(bg3);
    //backgroundImg3.scale = 2.7;

    // to make instruction invisible
    instruction.visible = false;

    // to make infinite invisible
    infinite.visible = false;

    // to make level iinvisible
    level.visible = false;

    // to tell the what to do
    stroke("black");
    fill("black");
    textSize(25);
    text("1. Either use right and let arrow keys or use right and left button to move.",200,200);
    text("2. Either use space key or use space button to shoot covid.",200,250);
    text(" Press start button to play the game",600,350);

    // to make the play button
    play = createSprite(740,540);
    play.addImage(playImg);
    play.scale = 0.4;
  }


  


  

}

// function which can hide form options.
function hiding(){
  title.hide();
  playerName.hide();
  country.hide();
}