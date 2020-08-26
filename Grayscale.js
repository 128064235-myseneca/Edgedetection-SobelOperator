
function convertGrey(imgData){
    var temp = 0;
    var greyData = imgData;
    for(var i=0;i<imgData.data.length;i+=4){
        temp = Math.floor((0.299*imgData.data[i]+0.587*imgData.data[i+1]+0.114*imgData.data[i+2]));
//        console.log(temp);
        greyData.data[i] = temp;
        greyData.data[i+1] = temp;
        greyData.data[i+2] = temp;
    }
    return(greyData);
}