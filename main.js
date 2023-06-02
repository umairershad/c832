
var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "blue";
width_of_line = 2;
var screenwidth = screen.width;
var screenheight = screen.height;
var newwidth = screenwidth - 70;
var newheight = newheight - 300;
var mouseevent = "";

if (screenwidth < 992) {
    canvas.width = newwidth;
    canvas.height = newheight;
}
canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    //Addictonal Activity start
    //color = document.getElementById("color").value;
    //width_of_line = document.getElementById("width_of_line").value;
    //Addictonal Activity ends
    console.log("my_touchstart");
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

}




canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    console.log("my_touchmove");
    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;


    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();


    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    mouseevent = "mousedown";
}
canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e) {
    mouseevent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e) {
    mouseevent = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e) {
    current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_mouse_X, current_position_of_mouse_y);
    ctx.stroke();
    last_position_of_x = current_position_of_mouse_X;
    last_position_of_y = current_position_of_mouse_y;
}