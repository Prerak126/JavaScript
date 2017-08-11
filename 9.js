var x=prompt("Enter a number","3");

var a=["1","3","5","4","7","8","9","6","10","11"];
var p=false;

for(var i=0;i<a.length;i++){
    if(a[i]===x){
        p=true;
    }
    else
        continue;
}

if(p){
    window.alert("match");
}
else
    window.alert("No Match");