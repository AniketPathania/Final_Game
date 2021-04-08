 // UP ARROW COMMAND
function UpArrowRengoku(){
    if(keyIsDown(UP_ARROW)){
      Rengoku.velocityY = -15;
      Rengoku.addImage(RengokuIMGback);
       direction = "up";
     }
     if(keyWentUp(UP_ARROW)){
       Rengoku.velocityY = 0;
     }
     if(keyWentDown("space") && direction == "up" && Stamina > 9){
       Rengoku.addImage(RengokuIMGbacksword);

     }
     if(keyWentUp("space") && direction == "up"){
       Rengoku.addImage(RengokuIMGback);
     }
     
  }





 // DOWN ARROW COMMAND
function DownArrowRengoku(){
    if(keyIsDown(DOWN_ARROW)){
        Rengoku.velocityY = 15;
        Rengoku.addImage(RengokuIMGfront);
        direction = "down";

      }
      if(keyWentUp(DOWN_ARROW)){
        Rengoku.velocityY = 0;

      }
      if(keyWentDown("space") && direction == "down" && Stamina > 9){
        Rengoku.addImage(RengokuIMGfrontsword);
      }
       if(keyWentUp("space") && direction == "down"){
        Rengoku.addImage(RengokuIMGfront);
      }
}






    // LEFT ARROW COMMAND
function LeftArrowRengoku(){
    if(keyIsDown(LEFT_ARROW)){
        Rengoku.velocityX = -15;
        Rengoku.addImage(RengokuIMGleft);
        direction = "left";
      }
      if(keyWentUp(LEFT_ARROW)){
        Rengoku.velocityX = 0;
      }
      if(keyWentDown("space") && direction == "left" && Stamina > 9){
        Rengoku.addImage(RengokuIMGleftsword);
 
      }




      
      if(keyWentUp("space") && direction == "left"){
        Rengoku.addImage(RengokuIMGleft);
 
      }
}





  // RIGHT ARROW COMMAND
function RightArrowRengoku(){
    if(keyIsDown(RIGHT_ARROW)){
        Rengoku.velocityX = 15;
        Rengoku.addImage(RengokuIMGright);
        direction = "right";
      }
      if(keyWentUp(RIGHT_ARROW)){
        Rengoku.velocityX = 0;
      }
      if(keyWentDown("space") && direction == "right" && Stamina > 9){
        Rengoku.addImage(RengokuIMGrightsword);

      }
       if(keyWentUp("space") && direction == "right"){
        Rengoku.addImage(RengokuIMGright);
      }
      
}











