var a=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

var p=prompt("Enter a Day name","Monday");

for(var i=0;i<a.length-1;i++){
    if(a[i]===p){
        for(var j=i+1;j<a.length-1;j++){
            console.log(a[j]);
        }
    }
    else if(p==="Sunday")
        console.log("it is the last day of the week");

    else
        continue;

}

