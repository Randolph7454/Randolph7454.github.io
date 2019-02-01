function startAnimation()
{
    animate();
}

function stopAnimation()
{
    cancelAnimationFrame(a);
}

var a;
var rect1X = 100;
var rect1Y = 350;
var rect1W = 190;
var rect1H = 50;

var rect2X = 130;
var rect2Y = 300;
var rect2W = 130;
var rect2H = 50;

var rect3X = 160;
var rect3Y = 250;
var rect3W = 75;
var rect3H = 50;

var rect4X = 180;
var rect4Y = 200;
var rect4W = 35;
var rect4H = 50;

var rect5X = 170;
var rect5Y = 400;
var rect5W = 50;
var rect5H = 150;




var moveAmountY = 1;






function drawBackground()  //things that wont move during the animation
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#fbfffd";
    ctx.fillRect(0,0, window.innerWidth, window.innerHeight); //the dimensions of the rectangle will mirror the size of the canvas

}



function animate()
{
    a = requestAnimationFrame(animate);
    drawBackground();
    drawRectangles();
     drawCircles();

}

function drawCircles()
{
var ctx = document.getElementById('myCanvas').getContext("2d");

//draw two circles, differently


ctx.beginPath();
ctx.arc(10,20,90,0,2*Math.PI);
ctx.fillStyle = "#fff300";
ctx.fill();
ctx.stroke();
}
function drawRectangles()

{
    //associate the canvas on index with javascript
    var canvas = document.getElementById("myCanvas");
    rect1Y = rect1Y - moveAmountY;
    //associate 2d draw tools with canvas
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#a28000";
    ctx.fillRect(rect1X,rect1Y,rect1W,rect1H);

    ctx.fillStyle = "#a28000";
    rect2Y = rect2Y - moveAmountY;
    ctx.fillRect(rect2X,rect2Y,rect2W,rect2H);

    ctx.fillStyle = "#a28000";
    rect3Y = rect3Y - moveAmountY;
    ctx.fillRect(rect3X,rect3Y,rect3W,rect3H);

    ctx.fillStyle = "#a28000";
    rect4Y = rect4Y - moveAmountY;
    ctx.fillRect(rect4X,rect4Y,rect4W,rect4H);


    ctx.fillStyle = "#000000";
    rect5Y = rect5Y - moveAmountY;
    ctx.fillRect(rect5X,rect5Y,rect5W,rect5H);

}
