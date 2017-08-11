var a=["1","2","3","4","5","6","7","8"];
var b=["43","11","2","31","14","5","16","37","8"];
var p=1;

for(var i=0;i<a.length;i++){
    for(var j=0;j<b.length;j++){
        if(a[i]===b[j]){
            window.alert("There is a mtach "+ p);
            p++;
        }
    }
}
