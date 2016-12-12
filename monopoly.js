
var canvas = null;
var ctx = null;

function init(){

   console.log("Charizard says hello world!");
   var game = new gameBoard();
   var i;
   for (i=0;i<40; i++){
      console.log(game[i].name);

   };
   canvas=document.getElementById("myCanvas");
   canvas.width=750;
   canvas.height=750;
   ctx=canvas.getContext("2d");
   var img = new Image();
   img.src="board.jpeg";
   ctx.drawImage(img,0,0,750, 750);


};

window.onload=init;



