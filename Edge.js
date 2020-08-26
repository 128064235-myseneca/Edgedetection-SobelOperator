var imgData;
var img;


function edgeDetect(kx,ky,data){
    edgex = convulation(kx,1,data);
    edgey = convulation(ky,1,data);
    return([edgex,edgey]);
}


function draw() {
    var kernelx = [[-1,0,1],
         [-2,0,2],
         [-1,0,1]];
    
    var kernely = [[-1,-2,-1],
         [0,0,0],
         [1,2,1]];
    var kernel = [];
    
    var canvas1;
    var canvas2;
    var canvas3;
    var ctx1;
    var ctx2;
    var blurData;
    var ctx3;
   
    canvas1 = document.getElementById('myCanvas1');
    canvas2 = document.getElementById('myCanvas2');
    canvas3 = document.getElementById('myCanvas3');
    ctx1 = canvas1.getContext('2d');
    ctx2 = canvas2.getContext('2d');
    ctx3 = canvas3.getContext('2d');
    img = new Image();
    
    img.onload = function() {
        canvas1.height = img.height;
        canvas1.width = img.width;
        canvas2.height = img.height;
        canvas2.width = img.width;
        canvas3.height = img.height;
        canvas3.width = img.width;
        ctx1.drawImage(img, 0, 0);
        
        imgData = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
//        testData = imgData;
         blurData = gaussianBlur(kernel);
        greyData = convertGrey(blurData);
        edgeData = edgeDetect(kernelx,kernely, greyData);
        console.log(edgeData);
      
        
        ctx2.putImageData(edgeData[0],0,0);
        ctx3.putImageData(edgeData[1],0,0);
//        console.log(ctx);
    };  
    
    img.src = 'img/Shubham.jpg';
//    console.log(img);
    
}
