// UP ARROW COMMAND
function UpArrowInosuke(){
        if(keyIsDown(UP_ARROW)){
            inosuke.velocityY = -15;
            inosuke.addImage(inosukeIMGback);
            direction = "up";
          }
          if(keyWentUp(UP_ARROW)){
            inosuke.velocityY = 0;
          }
          if(keyWentDown("space") && direction == "up" && Stamina > 10){
            inosuke.addImage(inosukeIMGbacksword);
          }
          if(keyWentUp("space") && direction == "up" ){
            inosuke.addImage(inosukeIMGback);
          }
     
  }





 // DOWN ARROW COMMAND
function DownArrowInosuke(){
   if(keyIsDown(DOWN_ARROW)){
    inosuke.velocityY = 15;
    inosuke.addImage(inosukeIMGfront);
    direction = "down";

  }
  if(keyWentUp(DOWN_ARROW)){
    inosuke.velocityY = 0;

  }
  if(keyWentDown("space") && direction == "down" && Stamina > 10){
    inosuke.addImage(inosukeIMGfrontsword);

  }
   if(keyWentUp("space") && direction == "down"){
    inosuke.addImage(inosukeIMGfront);

  }
  
}






    // LEFT ARROW COMMAND
function LeftArrowInosuke(){
    if(keyIsDown(LEFT_ARROW)){
        inosuke.velocityX = -15;
        inosuke.addImage(inosukeIMGleft);
        direction = "left"
    }
      if(keyWentUp(LEFT_ARROW)){
        inosuke.velocityX = 0;
      }
    
      if(keyWentDown("space") && direction == "left" && Stamina > 10){
        inosuke.addImage(inosukeIMGleftsword);
      }
      
      if(keyWentUp("space") && direction == "left"){
        inosuke.addImage(inosukeIMGleft);
      }
    
}





  // RIGHT ARROW COMMAND
function RightArrowInosuke(){
    if(keyIsDown(RIGHT_ARROW)){
        inosuke.velocityX = 15;
        inosuke.addImage(inosukeIMGright);
        direction = "right";
      }
      if(keyWentUp(RIGHT_ARROW)){
        inosuke.velocityX = 0;
      }
      if(keyWentDown("space") && direction == "right" && Stamina > 10){
        inosuke.addImage(inosukeIMGrightsword);
      }
       if(keyWentUp("space") && direction == "right"){
        inosuke.addImage(inosukeIMGright);
      }
      
}
