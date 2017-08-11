var a=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

var p=prompt("Enter a Day name","Monday");

for(var i=0;i<a.length-1;i++){
    if(a[i]===p){
        for(var j=i+1;j<a.length;j++){
            console.log(a[j]);
        }
        for(var k=0;k<i+1;k++){
            console.log(a[k]);
        }
    }
    else
        continue;
}
if(p==="Sunday"){
    for(var i=0;i<a.length-1;i++){
        console.log(a[i]);
    }
}

