let colors= {
    color1: 'red',
    color2: 'blue',
    color3: 'green',
    allColors() {
        console.log(`${this.color1} ${this.color2} ${this.color3}`);
    }
}

colors.allColors();

function Color(color1, color2, color3) {
    this.color1 = color1;
    this.color2 = color2;
    this.color3 = color3;
    this.colorDisplay = function() {
        console.log(this.color1+ this.color2 + this.color3);
    }
};

let separate= new Color('red ', 'green ', 'blue ');
separate.colorDisplay();

