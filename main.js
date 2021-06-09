var mouseEvent="empty";
var currentPosition_X;
var currentPosition_Y;
var lastPosition_X;
var lastPosition_Y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",myMousedown);

function myMousedown (e) {
    colour=document.getElementById("colour_input").value;
    width=document.getElementById("width_input").value;
    radius=document.getElementById("radius_input").value;
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseleave",myMouseLeave);
canvas.addEventListener("mouseup",myMouseUp);
canvas.addEventListener("mousemove",myMouseMove);

function myMouseLeave(e) {
    mouseEvent="mouseLeave";
}

function myMouseUp(e) {
    mouseEvent="mouseUp"
}

function myMouseMove(e) {
    currentPosition_X=e.clientX-canvas.offsetLeft;
    currentPosition_Y=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=width;
        ctx.arc(currentPosition_X,currentPosition_Y,radius,0,2*Math.PI);

        console.log("Last Position of x and y Coordinates= ");
        console.log("x = " + lastPosition_X + "y = " + lastPosition_Y);
        
        console.log("Current Position of x and y Coordinates= ");
        console.log("x = " + currentPosition_X + "y = " + currentPosition_Y);
        
        ctx.stroke();

        lastPosition_X=currentPosition_X;
        lastPosition_Y=currentPosition_Y
    }
}

function clearArea() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
