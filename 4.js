var a=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"];

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

