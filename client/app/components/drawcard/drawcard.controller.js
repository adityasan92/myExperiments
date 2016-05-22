class DrawcardController {
  constructor() {
    this.name = 'drawcard';
    var canvas = document.getElementById("canvas");
    console.log(canvas);
    if(canvas){
      this.attachListeners(canvas);
    }
  }

  attachListeners(canvas){
     var curColor = 'black';
     var isDown      = false;
     var ctx = canvas.getContext("2d");
     var canvasX, canvasY;
     ctx.lineWidth = 5;
     console.log(ctx);
     canvas.addEventListener("mousedown", function(e){
         isDown = true;
         ctx.beginPath();
         canvasX = e.pageX - canvas.offsetLeft;
         canvasY = e.pageY - canvas.offsetTop;
         ctx.moveTo(canvasX, canvasY)
     });

     canvas.addEventListener("mousemove", function(e){
         if(isDown != false){
           canvasX = e.pageX - canvas.offsetLeft;
           canvasY = e.pageY - canvas.offsetTop;
           ctx.lineTo(canvasX, canvasY)
           ctx.strokeStyle = curColor;
           ctx.stroke();
         }
     });

     canvas.addEventListener("mouseup", function(e){
         isDown = false;
         ctx.closePath();
     });
 }

}

export default DrawcardController;
