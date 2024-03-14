window.onload = function () {
    var canvas = document.getElementById("object");
    var context = canvas.getContext("2d");
    context.strokeStyle = "rgb(42, 118, 121)";
    context.beginPath();
    context.moveTo(100,100);
    context.lineTo(200,200);
    context.lineTo(300, 100);
    context.lineWidth = 3;
    context.fillStyle = "#FCBAAD";
    context.stroke();
    context.fill();
}