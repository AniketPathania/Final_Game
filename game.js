class Game {
    constructor(){}

     start(){
      if(gameState == "title"){
        form = new Form();
        form.display();
      }

     }



     
     play(){
       if(gameState == "story"){
         form.hide();

       }
     }
}

function PlayerRestriction(user){
  if(user.x < 20 ){
    user.x = user.x+50
    user.y = user.y
  }
  if(user.x > 3005 ){
    user.x = user.x-50
    user.y = user.y
    }
  if(user.y < 20 ){
    user.x = user.x
    user.y = user.y+50
    }
 if(user.y > 3980 ){
  user.x = user.x
  user.y = user.y-20
  } 


}




function LifebarSystem(){
  if(Health > 95){
    lifebar2.x = lifebar.x;
    lifebar2.y = lifebar.y-20;
  
    }

    if(Health > 89 &&  Health < 95){
      lifebar2.x = lifebar.x+25;
      lifebar2.y = lifebar.y-20;
    }

  if(Health > 79 && Health < 90 ){
    lifebar2.x = lifebar.x+65;
    lifebar2.y = lifebar.y-20;
   }

   if(Health > 69 && Health < 80 ){
    lifebar2.x = lifebar.x+115;
    lifebar2.y = lifebar.y-20;
  
     }

   if(Health > 59 && Health < 70 ){
    lifebar2.x = lifebar.x+155;
    lifebar2.y = lifebar.y-20;
    
    }


if(Health > 49 && Health < 60){
  lifebar2.x = lifebar.x+185;
  lifebar2.y = lifebar.y-20;

}

if(Health > 39 && Health < 50){
  lifebar2.x = lifebar.x+215;
  lifebar2.y = lifebar.y-20;

}


if(Health > 29 && Health < 40){
  lifebar2.x = lifebar.x+245;
  lifebar2.y = lifebar.y-20;

}


if(Health > 19 && Health < 30){
  lifebar2.x = lifebar.x+300;
  lifebar2.y = lifebar.y-20;
}

if(Health > 9 && Health < 20){
  lifebar2.x = lifebar.x+335;
  lifebar2.y = lifebar.y-20;

}

if(Health > 1 && Health < 10){
  lifebar2.x = lifebar.x+345;
  lifebar2.y = lifebar.y-20;

}

if(Health < 0){
  lifebar2.x = lifebar.x+360;
  lifebar2.y = lifebar.y-20;
}


lifebar4.x = lifebar.x+178;
lifebar4.y = lifebar.y-20;

lifebar5.x = lifebar.x+178;
lifebar5.y = lifebar.y+24;
}









function StaminaSystem(){
  if(Stamina > 95){
    lifebar3.x = lifebar.x+5;
    lifebar3.y = lifebar.y+24;
  
    }

    if(Stamina > 89 && Stamina < 94){
      lifebar3.x = lifebar.x+25;
      lifebar3.y = lifebar.y+24;
    }

  if(Stamina > 79 && Stamina < 90 ){
    lifebar3.x = lifebar.x+65;
    lifebar3.y = lifebar.y+24;
   }

   if(Stamina > 69 && Stamina < 80 ){
    lifebar3.x = lifebar.x+115;
    lifebar3.y = lifebar.y+24;
  
     }

   if(Stamina > 59 && Stamina < 70 ){
    lifebar3.x = lifebar.x+155;
    lifebar3.y = lifebar.y+24;
    
    }


if(Stamina > 49 && Stamina < 60){
  lifebar3.x = lifebar.x+185;
  lifebar3.y = lifebar.y+24;

}

if(Stamina > 39 && Stamina < 50){
  lifebar3.x = lifebar.x+215;
  lifebar3.y = lifebar.y+24;

}


if(Stamina > 29 && Stamina < 40){
  lifebar3.x = lifebar.x+245;
  lifebar3.y = lifebar.y+24;

}


if(Stamina > 19 && Stamina < 30){
  lifebar3.x = lifebar.x+300;
  lifebar3.y = lifebar.y+24;
}

if(Stamina > 9 && Stamina < 20){
  lifebar3.x = lifebar.x+335;
  lifebar3.y = lifebar.y+24;

}

if(Stamina > 1 && Stamina < 10){
  lifebar3.x = lifebar.x+345;
  lifebar3.y = lifebar.y+24;

}

if(Stamina == 0){
  lifebar3.x = lifebar.x+360;
  lifebar3.y = lifebar.y+24;
}

}



function StaminaRegeneration(){
  if(frameCount%50===0){
    if(Stamina < 96){
    Stamina = Stamina+5
    }
  }

}

function HealthRegeneration(){
  if(frameCount%150===0){
    if(Health < 96){
    Health = Health+2;
    }
  }

}





function General(){
  if(keyWentDown("space") && Stamina > 10){
     Stamina = Stamina-10;
  }
}



function DamageSystem(enemyC){
  if(isTouching(playercollision,enemyC)){
      Health = Health-0.1;
      if(keyWentDown("space") ){
        if(Stamina > 0){
          EnemyHP = EnemyHP-1;
        }
      }
  }
}

function DamageSystem1(enemyC){
  if(isTouching(playercollision,enemyC)){
      Health = Health-0.5;
      if(keyWentDown("space")){
        if(Stamina > 0){
          EnemyHP2 = EnemyHP2-1;
        }
      }
  }
}

function DamageSystem2(enemyC){
  if(isTouching(playercollision,enemyC)){
      Health = Health-0.2;
      if(keyWentDown("space")){
        if(Stamina > 0){
          EnemyHP3 = EnemyHP3-1;
        }
      }
  }
}

function DamageSystem3(enemyC){
  if(isTouching(playercollision,enemyC)){
      Health = Health-0.3;
      if(keyWentDown("space" )){
        if(Stamina > 0){
          EnemyHP4 = EnemyHP4-1;
        }
      }
  }
}

function DamageSystem4(enemyC){
  if(isTouching(playercollision,enemyC)){
      Health = Health-0.4;
      if(keyWentDown("space")){
        if(Stamina > 0){
          EnemyHP5 = EnemyHP5-1;
        }
      }
  }
}


function PlayerCollision(user1){

  playercollision.x = user1.x;
  playercollision.y = user1.y;

}


function EnemyCollision(npc,collide){

  collide.x = npc.x;
  collide.y = npc.y;

}


function EnemyBouncer(enemy1){
  BounceOff(enemy1,leftwall);
  BounceOff(enemy1,rightwall);
  BounceOffN(enemy1,upwall);
  BounceOffN(enemy1,downwall);
}

function Death(npc1){
  if(EnemyHP < -10){
    npc1.x= 100000 ;
    npc1.y = 100000 ;
    npcState = "dead";
  }
}


function Death2(npc1){
  if(EnemyHP2 < -5){
    npc1.x= 100000 ;
    npc1.y = 100000 ;
    npcState2 = "dead";
  }
}


function Death3(npc1){
  if(EnemyHP3 < -6){
    npc1.x= 100000 ;
    npc1.y = 100000 ;
    npcState3 = "dead";
  }
}


function Death4(npc1){
  if(EnemyHP4 < -2){
    npc1.x= 100000 ;
    npc1.y = 100000 ;
    npcState4 = "dead";
  }
}


function Death5(npc1){
  if(EnemyHP5 < -4){
    npc1.x= 100000 ;
    npc1.y = 100000 ;
    npcState5 = "dead";
  }
}


function PlayerDeath(){
  if(Health < 0){
     PlayerStatus = "dead"
  }
  
}