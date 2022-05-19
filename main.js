var mouseEvent = "empty";
var last_position_of_X , last_position_of_Y ;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "pink";
line_width = "5";
canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value ;
    width_of_line = document.getElementById("width_of_line")
    mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color ;
        ctx.lineWidth = width_of_line ;
        
        console.log("last position of x and y cordinates");
        console.log("x =" + last_position_of_X + "y =" + last_position_of_Y);
        ctx.moveTo(last_position_of_X , last_position_of_Y);

        console.log("current position of x and y cordinates");
        console.log("x =" + current_position_of_mouse_X + "y =" + current_position_of_mouse_Y);
        ctx.lineTo(current_position_of_mouse_X , current_position_of_mouse_Y);
        ctx.stroke();

    }
    last_position_of_X = current_position_of_mouse_X;
    last_position_of_Y = current_position_of_mouse_Y;
}
canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseup" ;
}

canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave" ;
}
function cleararea()
{
ctx.clearRect(0 , 0 ,ctx.canvas.width , ctx.canvas.height);
}