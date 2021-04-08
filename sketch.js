var fr,mr
var r1,r2,r4,r5;
var inosuke,inosukeIMG;
var life = 100;
var bg;

var form,game;


var EnemyHP = 2;
var EnemyHP2 = 2;
var EnemyHP3 = 2;
var EnemyHP4 = 2;
var EnemyHP5 = 2;

var gameState = "title";

var EnemyAlive = 5;

var PlayerStatus = "alive";

var npcState = "alive";
var npcState2 = "alive";
var npcState3 = "alive";
var npcState4 = "alive";
var npcState5 = "alive";

var tutorial2 = 1;

var Enemyleft = 5;

var Health = 100;

var Stamina = 100;

var EnemyIMG;
var inosuke,inosukeIMGfront,inosukeIMGback,inosukeIMGright,inosukeIMGleft
var inosukeIMGfrontsword,inosukeIMGbacksword,inosukeIMGleftsword,inosukeIMGrightsword;
var inosukechrIMG,rengokuchrIMG,inosukechr,rengokuchr;
var inosukechrinfoIMG,rengokuchrinfoIMG,inosukechrinfo,rengokuchrinfo;
var Rengoku,RengokuIMGback,RengokuIMGfront,RengokuIMGright,RengokuIMGleft;
var RengokuIMGfrontsword,RengokuIMGbacksword,RengokuIMGleftsword,RengokuIMGrightsword;
var playBG,s1,s2,s3,story1,story2,story3,IMGtest;
var lifebar, lifeleft,lifebarIMG

var Bg,BgIMG;

var direction = "right";

var player = "inosuke";

function preload(){
  inosukeIMGback = loadImage("images/inosuke back.png");
  inosukeIMGfront = loadImage("images/inosuke front.png");
  inosukeIMGright = loadImage("images/inosuke right.png");
  inosukeIMGleft = loadImage("images/inosuke left.png");


  RengokuIMGback = loadImage("images/Rengoku back.png");
  RengokuIMGfront = loadImage("images/Rengoku front.png");
  RengokuIMGright = loadImage("images/Rengoku right.png");
  RengokuIMGleft = loadImage("images/Rengoku left.png");

  RengokuIMGfrontsword = loadImage("images/Rengoku front sword.png");
  RengokuIMGbacksword = loadImage("images/Rengoku back sword.png");
  RengokuIMGleftsword = loadImage("images/Rengoku left sword.png");
  RengokuIMGrightsword = loadImage("images/Rengoku right sword.png");



  inosukeIMGbacksword = loadImage("images/inosuke back sword.png");
  inosukeIMGfrontsword = loadImage("images/inosuke front sword.png");
  inosukeIMGrightsword = loadImage("images/inosuke right sword.png");
  inosukeIMGleftsword = loadImage("images/inosuke left sword.png");

  BgIMG = loadImage("images/Bg.jpg")

  EnemyIMG  = loadImage("images/demon.png");

  bg = loadImage("images/starting.jpg");

  lifebarIMG = loadImage("images/lifebar.png");

 // playBG = loadImage("images/backgroundIMG.jpg");
  inosukechrIMG = loadImage("images/inosukeChr.png");
  rengokuchrIMG = loadImage("images/RengokuChr.png");
  rengokuchrinfoIMG = loadImage("images/RengokuChrIntro.png");
  inosukechrinfoIMG = loadImage("images/inosukeChrIntro.png")
  story1 = loadImage("images/story1.jpg");
  story2 = loadImage("images/story2.jpg");
  story3 = loadImage("images/story3.png");
  GameOver = loadImage("images/gameover.png")
  Youwon = loadImage("images/theEnd.png")

  tutorial = loadImage("images/tutorial.png");

}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);

  inosuke = createSprite(200,200,200,200);
  inosuke.addImage(inosukeIMGback);
  inosuke.scale = 0.06 ;
  inosuke.visible = false;

  leftwall = createSprite(-10,-10,10,10000000)
  leftwall.visible = false;

  rightwall = createSprite(3010,-10,10,10000000)
  rightwall.visible = false;

  upwall = createSprite(-10,-10,100000000,10)
  upwall.visible = false;

  downwall = createSprite(-10,4000,100000000,10)
  downwall.visible = false;

  Enemy = createSprite(800,800,50,50);
  Enemy.addImage(EnemyIMG);
  Enemy.scale = 0.7 ;
  Enemy.visible = false;


  Enemy2 = createSprite(1200,900,50,50);
  Enemy2.addImage(EnemyIMG);
  Enemy2.scale = 0.7 ;
  Enemy2.visible = false;


  Enemy3 = createSprite(1200,1000,50,50);
  Enemy3.addImage(EnemyIMG);
  Enemy3.scale = 0.7 ;
  Enemy3.visible = false;


  Enemy4 = createSprite(700,1400,50,50);
  Enemy4.addImage(EnemyIMG);
  Enemy4.scale = 0.7 ;
  Enemy4.visible = false;


  Enemy5 = createSprite(750,500,50,50);
  Enemy5.addImage(EnemyIMG);
  Enemy5.scale = 0.7 ;
  Enemy5.visible = false;


  Rengoku = createSprite(200,200,20,20);
  Rengoku.addImage(RengokuIMGback);
  Rengoku.scale = 0.06 ;
  Rengoku.visible = false;

  lifebar = createSprite(displayWidth/2  , displayHeight/3 + 60,200,200);
  lifebar.addImage(lifebarIMG);
  //rengokuchrinfo.scale = 0.15
  lifebar.visible = false;

  lifebar2 =  createSprite(1200,425,347,30);
  lifebar2.shapeColor = "lime";
  lifebar2.visible = false;

  lifebar3 =  createSprite(1200,425,340,20);
  lifebar3.shapeColor = "blue";
  lifebar3.visible = false;

  lifebar4 =  createSprite(1200,425,10,40);
  lifebar4.shapeColor = "yellow";
  lifebar4.visible = false;

  lifebar5 =  createSprite(1200,425,10,30);
  lifebar5.shapeColor = "yellow";
  lifebar5.visible = false;


  rengokuchrinfo = createSprite(displayWidth/2  , displayHeight/3 + 60,200,200);
  rengokuchrinfo.addImage(rengokuchrinfoIMG);
  rengokuchrinfo.scale = 0.15
  rengokuchrinfo.visible = false;

  inosukechrinfo = createSprite(displayWidth/2  , displayHeight/3 + 60,200,200);
  inosukechrinfo.addImage(inosukechrinfoIMG);
  inosukechrinfo.scale = 0.15
  inosukechrinfo.visible = false;



 inosukechr = createSprite(displayWidth/2 + 400 , displayHeight/3 + 60,200,200);
 inosukechr.addImage(inosukechrIMG);
 inosukechr.scale = 0.06 ;
 inosukechr.visible = false;

 

 Rengokuchr = createSprite(displayWidth/2  , displayHeight/3 + 60,200,200);
 Rengokuchr.addImage(rengokuchrIMG);
 Rengokuchr.scale = 0.06 ;
 Rengokuchr.visible = false;


 playercollision = createSprite(200,200,200,250);
 playercollision.visible = false;

 enemycollision = createSprite(200,200,200,300);
 enemycollision.visible = false;

 enemycollision2 = createSprite(200,200,200,300);
 enemycollision2.visible = false;

 enemycollision3 = createSprite(200,200,200,300);
 enemycollision3.visible = false;

 enemycollision4 = createSprite(200,200,200,300);
 enemycollision4.visible = false;

 enemycollision5 = createSprite(200,200,200,300);
 enemycollision5.visible = false;

 

 tutorial1 =  createSprite(410,450,200,300);
 tutorial1.addImage(tutorial);
 tutorial1.visible = false;

 game = new Game();
 game.start();
 game.play();


  Enemy.velocityY = -5;
  Enemy.velocityX = 5;



  Enemy2.velocityX = -5;
  Enemy2.velocityY = 4;


  Enemy3.velocityX = 5;
  Enemy3.velocityY = 4;


  Enemy4.velocityY = 5;
  Enemy4.velocityX = -5;


  Enemy5.velocityY = -5;
  Enemy5.velocityX = 5;

}




console.log(life);

function draw() {
  if(gameState == "title" || gameState == 1){
  background(bg);  
  }

  if(gameState == "story"){
    background(story1);  
    }
  if(gameState == "story2"){
    background(story2);  
    }
  if(gameState == "story3"){
    background(story3);  
   }

  

  if(gameState == 1){
    inosukechr.visible = true;
    Rengokuchr.visible = true;
  }


  if(gameState ==  3){
    background("cyan"); 
    image(BgIMG, -700,-400);

    if(tutorial2 == 1){
      tutorial1.visible = true;
      tutorial1.x = camera.x-270;
      tutorial1.y = camera.y+270; 
    }
    if(tutorial2 == 2){
      tutorial1.visible = false;
    }

   
    inosukechr.visible = false;
    Rengokuchr.visible = false;
    Enemy.visible = true;
    Enemy2.visible = true;
    Enemy3.visible = true;
    Enemy4.visible = true;
    Enemy5.visible = true;
    lifebar.visible = true;
    lifebar2.visible = true;
    lifebar3.visible = true;
    lifebar4.visible = true;
    lifebar5.visible = true;

    rengokuchrinfo.x = camera.x+580;
    rengokuchrinfo.y = camera.y-300;

    inosukechrinfo.x = camera.x+580;
    inosukechrinfo.y = camera.y-300;

    lifebar.x = camera.x+282;
    lifebar.y = camera.y-340;

    LifebarSystem();
    StaminaSystem();
    General();
    StaminaRegeneration();
    HealthRegeneration();
    PlayerDeath();
    //DamageSystem(Rengoku);
    }




    if(gameState == "story" ){
      inosukechr.visible = false;
      Rengokuchr.visible = false;
      }






  if(gameState == 3 && player == "inosuke"){

    if(PlayerStatus == "alive"){
  // VISIBLITY COMKMANDS 

  inosukechrinfo.visible = true;


  inosuke.visible = true;


 camera.position.x = inosuke.x;
 camera.position.y = inosuke.y;


// PLAYER COMMANDS (INOSUKE)//
UpArrowInosuke();
DownArrowInosuke()
LeftArrowInosuke()
RightArrowInosuke()


// MARGIN RESTRICTIONS 
PlayerCollision(inosuke);
PlayerRestriction(inosuke);
    }

  
}




// RENGOKU PLAYER COMMAND 


  if(gameState == 3 && player == "Rengoku" ){

    if(PlayerStatus == "alive"){

    Rengoku.visible = true;
    rengokuchrinfo.visible = true;
    camera.position.x = Rengoku.x;
    camera.position.y = Rengoku.y;

    UpArrowRengoku();
    DownArrowRengoku();
    LeftArrowRengoku();
    RightArrowRengoku();

  


   // MARGIN RESTRICTION 

   PlayerRestriction(Rengoku);
   PlayerCollision(Rengoku);
    }
  }

  Death(Enemy);
  Death2(Enemy2);
  Death3(Enemy3);
  Death4(Enemy4);
  Death5(Enemy5);

  if(npcState == "alive"){

    DamageSystem(enemycollision);
    EnemyBouncer(Enemy);
    
  }
   
  if(npcState2 == "alive"){

    DamageSystem1(enemycollision2);
    EnemyBouncer(Enemy2);

  }

  if(npcState3 == "alive"){

    DamageSystem2(enemycollision3);
    EnemyBouncer(Enemy3);

  }

  if(npcState4 == "alive"){

    DamageSystem3(enemycollision4);
    EnemyBouncer(Enemy4);

  }

  if(npcState5 == "alive"){

    DamageSystem4(enemycollision5);
    EnemyBouncer(Enemy5);

  }


  


  EnemyCollision(Enemy, enemycollision);
  EnemyCollision(Enemy2, enemycollision2);
  EnemyCollision(Enemy3, enemycollision3);
  EnemyCollision(Enemy4, enemycollision4);
  EnemyCollision(Enemy5, enemycollision5);


  if(npcState == "dead" &&  npcState2 == "dead" &&  npcState3 == "dead" &&  npcState4 == "dead" &&  npcState5 == "dead"){
    background(Youwon);  
    Enemy.velocityY = 0;
    Enemy.velocityX = 0;
    Enemy2.velocityX = 0;
    Enemy2.velocityY = 0;
    Enemy3.velocityX = 0;
    Enemy3.velocityY = 0;
    Enemy4.velocityY = 0;
    Enemy4.velocityX = 0;
    Enemy5.velocityY = 0;
    Enemy5.velocityX = 0;
  
    Rengoku.visible = false;
    inosuke.visible = false;
  
     Enemy.visible = false;
      Enemy2.visible = false;
      Enemy3.visible = false;
      Enemy4.visible = false;
      Enemy5.visible = false;
  
      lifebar.visible = false;
      lifebar2.visible = false;
      lifebar3.visible = false;
      lifebar4.visible = false;
      lifebar5.visible = false;
  
    rengokuchrinfo.visible = false;
    inosukechrinfo.visible = false;
  }


  if(PlayerStatus == "dead"){
    background(GameOver);  
    Enemy.velocityY = 0;
  Enemy.velocityX = 0;
  Enemy2.velocityX = 0;
  Enemy2.velocityY = 0;
  Enemy3.velocityX = 0;
  Enemy3.velocityY = 0;
  Enemy4.velocityY = 0;
  Enemy4.velocityX = 0;
  Enemy5.velocityY = 0;
  Enemy5.velocityX = 0;

  Rengoku.visible = false;
  inosuke.visible = false;

   Enemy.visible = false;
    Enemy2.visible = false;
    Enemy3.visible = false;
    Enemy4.visible = false;
    Enemy5.visible = false;

    lifebar.visible = false;
    lifebar2.visible = false;
    lifebar3.visible = false;
    lifebar4.visible = false;
    lifebar5.visible = false;

  rengokuchrinfo.visible = false;
  inosukechrinfo.visible = false;
   }

  drawSprites();

}


