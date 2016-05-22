class DrawcardController {

  constructor($http) {
    this.$http = $http;
    this.name = 'drawcard';
    var canvas = document.getElementById("canvas");
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

  predict(){
    var canvas = document.getElementById("canvas");
    var image = new Image();
    image.src = canvas.toDataURL("image/png");
    var file = this.dataURItoBlob(image.src);
    var fd = new FormData();
    fd.append("file", file);
    this.$http({
        method:'POST',
        url: 'http://localhost:5000',
        headers: { 'Content-Type': undefined},
        data: fd
    }).success(function(err, data){
        console.log(err);
        console.log(data);
    }).error(function(err){
        console.log(err);
    });
  }

  dataURItoBlob(dataURI) {
      // convert base64/URLEncoded data component to raw binary data held in a string
      var byteString;
      if (dataURI.split(',')[0].indexOf('base64') >= 0)
          byteString = atob(dataURI.split(',')[1]);
      else
          byteString = unescape(dataURI.split(',')[1]);
      // separate out the mime component
      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
      // write the bytes of the string to a typed array
      var ia = new Uint8Array(byteString.length);
      for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ia], {type:mimeString});
  }

  clear(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

DrawcardController.$inject = ['$http'];
export default DrawcardController;
