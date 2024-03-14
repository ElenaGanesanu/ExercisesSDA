window.onload= function() {
    var x= 10;
    var y= 200;
    var size= 40;
    for ( let i=0; i<10; i++) {
        var canvas= document.getElementById("rectangle");
        var context= canvas.getContext("2d");
        context.stokeStyle= "#000000";
        context.strokeRect(50, 50, 50, 50);
        context.stroke();
        let red= 255-20*i;
        let green= 20*i;
        let blue=250;
        let style= `rgb(${red}, ${green}, ${blue})`;
        context.fillStyle = style;
        context.fillRect(x, y, size, size);
        x+= size*2;
    }
}

