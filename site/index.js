var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(100, 100, 50, 50);
ctx.fillstyle = "#FF0000";
ctx.fill();
ctx.closePath();