var a=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"];

function displayLength(c) {
    document.write("<br>");
    document.write(c.length);
    document.write("<br>");
    for(var i=3;i<c.length;i++){
        document.write(c[i]);
        document.write("<br>");
    }
}


function displayQuotes() {
    for(var i=0;i<a.length;i++){
        document.write(a[i]);
        document.write("<br>");
    }
    displayLength(a);
}

displayQuotes();