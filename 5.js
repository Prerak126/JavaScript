var b=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"];
var a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

a.pop();

document.write("Pop called, check console for length ");
console.log(a.length);

document.write("<br>");

document.write(a.reverse());

console.log(a[7]);
document.write("<br>");

document.write(a.shift());

console.log(a.length);
document.write("<br>");
document.write(a.sort());
document.write("<br>");

var x=prompt("Enter something","hhh");
a.push(x);
document.write(a);
document.write("<br>");

console.log(a.length);

var p=prompt("Enter Some","uns");
a.unshift(p);
document.write(a);
document.write("<br>");

console.log(a.length);

a.splice(0,1);
document.write(a);
document.write("<br>");

console.log(a.length);
console.log(a[4]);

var y=a.slice(1);
document.write(y);
document.write("<br>");
var z=a.concat(b);
document.write("<br>");
document.write("<br>");

for(var i=0;i<z.length;i++){
    document.write(z[i]);
    document.write("<br>");
}
