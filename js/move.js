
var b_left = true;
var b_right = true;


var now = 0; // 0 center 1 up 2 left 3 right
var left = document.getElementById("left");
var right = document.getElementById("right");

var center = document.getElementById("profile");
var east = document.getElementById("east");
var west = document.getElementById("west");

var c_left = 50;
var c_top = 50;

left.onclick = function(){
    if(now==0){
        b_up=b_left=b_down=false;
        b_right=true;
        now=2;
        visiable();
        now=-1;
        move = setInterval(function(){
            c_left+=1;
            Fmove()
            if(c_left==150){
                now=2;
                center.style.visibility="hidden";
                clearInterval(move);
            }
        },1);
    }
    else if(now==3){
        b_up=b_left=b_right=true;
        b_down=false;
        now=0;
        visiable();
        now=-1;
        move = setInterval(function(){
            c_left+=1;
            Fmove()
            if(c_left==50){
                now=0;
                east.style.visibility="hidden";
                clearInterval(move);
            }
        },1);
    }
}

right.onclick = function(){
    if(now==0){
        b_up=b_right=b_down=false;
        b_left=true;
        now=3;
        visiable();
        now=-1;
        move = setInterval(function(){
            c_left-=1;
            Fmove()
            if(c_left==-50){
                now=3;
                center.style.visibility="hidden";
                clearInterval(move);
            }
        },1);
        
    }
    else if(now==2){
        b_up=b_left=b_right=true;
        b_down=false;
        now=0;
        visiable();
        now=-1;
        move = setInterval(function(){
            c_left-=1;
            Fmove()
            if(c_left==50){
                now=0;
                west.style.visibility="hidden";
                clearInterval(move);
            }
        },1);
    }
}

function Fmove(){
    center.style.left = c_left+'%';
    center.style.top = c_top+'%';
    west.style.left = -100+c_left+'%';
    west.style.top = c_top+'%';
    east.style.left = 100+c_left+'%';
    east.style.top = c_top+'%';
}

function visiable(){
    if(b_left) left.style.visibility = "visible";
    else left.style.visibility = "hidden";
    if(b_right) right.style.visibility = "visible";
    else right.style.visibility = "hidden";

    
    center.style.visibility = "visible";
    if(now==2){
        west.style.visibility = "visible";
        east.style.visibility = "hidden";
    }
    if(now==3){
        west.style.visibility = "hidden";
        east.style.visibility = "visible";
    }
}