var b_up = true;
var b_left = true;
var b_right = true;
var b_down = false;

var now = 0; // 0 center 1 up 2 left 3 right
var up = document.getElementById("up");
var left = document.getElementById("left");
var right = document.getElementById("right");
var down = document.getElementById("down");

up.onmouseover = function(){
    if(!b_up) return;
    b_up=b_left=b_right=false;
    b_down=true;
    now=1;
    visiable();
}

down.onmouseover = function(){
    if(!b_down) return;
    b_up=b_left=b_right=true;
    b_down=false;
    now=0;
    visiable();
}

left.onmouseover = function(){
    if(now==0){
        b_up=b_left=b_down=false;
        b_right=true;
        now=2;
        visiable();
    }
    else if(now==3){
        b_up=b_left=b_right=true;
        b_down=false;
        now=0;
        visiable();
    }
}

right.onmouseover = function(){
    if(now==0){
        b_up=b_right=b_down=false;
        b_left=true;
        now=3;
        visiable();
    }
    else if(now==2){
        b_up=b_left=b_right=true;
        b_down=false;
        now=0;
        visiable();
    }
}

function visiable(){
    if(b_up) up.style.visibility = "visible";
    else up.style.visibility = "hidden";
    if(b_down) down.style.visibility = "visible";
    else down.style.visibility = "hidden";
    if(b_left) left.style.visibility = "visible";
    else left.style.visibility = "hidden";
    if(b_right) right.style.visibility = "visible";
    else right.style.visibility = "hidden";
}