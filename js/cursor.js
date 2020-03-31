function Fcursor(x) { 
    var positionLeft = x.clientX; 
    var positionTop = x.clientY; 
    document.getElementById('cursor_img').style.left = positionLeft - 10 + "px"; 
    document.getElementById('cursor_img').style.top = positionTop - 10 +"px"; 
} 
if (document.addEventListener) { 
    document.addEventListener("mousemove", Fcursor); 
} 
else if (document.attachEvent) { 
    document.attachEvent("onmousemove", Fcursor); 
}
