
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
        now=1;
        visiable(0);
        now=-1;
        move = setInterval(function(){
            c_left+=1;
            Fmove()
            if(c_left==150){
                now=1;
                visiable(1);
                center.style.visibility="hidden";
                clearInterval(move);
            }
        },1);
    }
    else if(now==2){
        b_up=b_left=b_right=true;
        b_down=false;
        now=0;
        visiable(0);
        now=-1;
        move = setInterval(function(){
            c_left+=1;
            Fmove()
            if(c_left==50){
                now=0;
                visiable(1);
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
        now=2;
        visiable(0);
        now=-1;
        move = setInterval(function(){
            c_left-=1;
            Fmove()
            if(c_left==-50){
                now=2;
                visiable(1);
                center.style.visibility="hidden";
                clearInterval(move);
            }
        },1);
        
    }
    else if(now==1){
        b_up=b_left=b_right=true;
        b_down=false;
        now=0;
        visiable(0);
        now=-1;
        move = setInterval(function(){
            c_left-=1;
            Fmove()
            if(c_left==50){
                now=0;
                visiable(1);
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

function visiable(x){
    visiable_dir(x);
    center.style.visibility = "visible";
    if(now==1){
        west.style.visibility = "visible";
        east.style.visibility = "hidden";
    }
    if(now==2){
        west.style.visibility = "hidden";
        east.style.visibility = "visible";
    }
}

function visiable_dir(x){
    if(x==0 && window.matchMedia("screen and (max-width:1280px)")){
        left.style.visibility="hidden";
        right.style.visibility="hidden";
    }
    else{
        if(b_left) left.style.visibility = "visible";
        else left.style.visibility = "hidden";
        if(b_right) right.style.visibility = "visible";
        else right.style.visibility = "hidden";
    }
}

var screen_wid = window.matchMedia("screen and (max-width:840px)");
screen_wid.addListener(function(e){
    if(e.matches){
        left.style.visibility = "hidden";
        right.style.visibility = "hidden";
        center.style.visibility = "visble";
        west.style.visibility = "visible";
        east.style.visibility = "hidden";
        center.style.left = "50%";
        center.style.top = "20px";
        west.style.left = "50%";
        west.style.top = "410px";

    }
    else{
        visiable(1);
        if(now==0){
            center.style.left = "50%";
            center.style.top = "50%";
            west.style.left = "-100%";
            west.style.top = "50%";
            east.style.left = "150%";
            east.style.top = "50%";
        }
        if(now==1){
            center.style.left = "200%";
            center.style.top = "50%";
            west.style.left = "50%";
            west.style.top = "50%";
            east.style.left = "300%";
            east.style.top = "50%";
        }
        if(now==2){
            center.style.left = "-50%";
            center.style.top = "50%";
            west.style.left = "-200%";
            west.style.top = "50%";
            east.style.left = "50%";
            east.style.top = "50%";
        }
        
    }
});