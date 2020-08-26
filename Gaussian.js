    var kernelSum = 0.0;
   


function gaussianDestribution(mean, sigma, x, y){
    var num = 1/(sigma*sigma*2*Math.PI) * Math.exp(-1/2*(Math.pow((x-mean),2)+Math.pow((y-mean),2))/(2*Math.pow(sigma,2)));
    return(num)
}

function generateKernel(kernel){
    
    var mean = 0;
    var sigma = 0.9;
    
    var temp = [];
// 3*3 kernel 
    for(var x = -1;x<=1;x++){
        for(var y=-1;y<=1;y++)
            {
                
                temp.push(gaussianDestribution(mean, sigma, x,y));   
                kernelSum += gaussianDestribution(mean, sigma, x,y);
            }
        kernel.push(temp);
        temp = [];
    }
    return(kernel);
}

function convulation(kernel,sum, Data){
   
 
    var r = 0;
    var g = 1;
    var b = 2;
    var d = 4;
    var w = img.width;
    var acc;
    var testData = Data;
    acc = [0,0,0,255];
//    acc.height = 1;
//    acc.width = 1;
    
//            console.log(acc);

           
            for(var i=0;i<Data.data.length;i+=4){
                acc[0] = (Data.data[i+r]*kernel[0][0]+Data.data[i+d+r]*kernel[0][1]+Data.data[i+2*d+r]*kernel[0][2] +Data.data[i+w*d+r]*kernel[1][0]+Data.data[i+(w*d)+d+r]*kernel[1][1]+Data.data[i+(w*d)+2*d+r]*kernel[1][2] +Data.data[i+2*w*d+r]*kernel[2][0]+Data.data[i+(2*w*d)+d+r]*kernel[2][1]+Data.data[i+(2*w*d)+2*d+r]*kernel[2][2])/sum;
                
                acc[1] = (Data.data[i+g]*kernel[0][0]+Data.data[i+d+g]*kernel[0][1]+Data.data[i+2*d+g]*kernel[0][2] +Data.data[i+w*d+g]*kernel[1][0]+Data.data[i+(w*d)+d+g]*kernel[1][1]+Data.data[i+(w*d)+2*d+g]*kernel[1][2] +Data.data[i+2*w*d+g]*kernel[2][0]+Data.data[i+(2*w*d)+d+g]*kernel[2][1]+Data.data[i+(2*w*d)+2*d+g]*kernel[2][2])/sum;
                
                acc[2] = (Data.data[i+b]*kernel[0][0]+Data.data[i+d+b]*kernel[0][1]+Data.data[i+2*d+b]*kernel[0][2] +Data.data[i+w*d+b]*kernel[1][0]+Data.data[i+(w*d)+d+b]*kernel[1][1]+Data.data[i+(w*d)+2*d+b]*kernel[1][2] +Data.data[i+2*w*d+b]*kernel[2][0]+Data.data[i+(2*w*d)+d+b]*kernel[2][1]+Data.data[i+(2*w*d)+2*d+b]*kernel[2][2])/sum;
                
                testData.data[i+(w*d)+d+r] = acc[0];    
                testData.data[i+(w*d)+d+g] = acc[1];
                testData.data[i+(w*d)+d+b] = acc[2];
            }
        return(testData);
        
        }
    



function gaussianBlur(kernel){
    var gaussData;
    kernel = generateKernel(kernel);
    gaussData = convulation(kernel,kernelSum,imgData);
    
    return(gaussData);
    
}
function meanBlur(kernel){
    var meanData;
        meanData = convulation(kernel,9);
    return(meanData);
}

    