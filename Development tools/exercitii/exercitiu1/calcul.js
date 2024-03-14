const prompt= require('prompt-sync')();

function arieDreptunghi(a, b) {
    let result= parseFloat(a) * parseFloat(b);
    return result;
}

function arieCerc(r) {
    let result= Math.PI * parseFloat(r) * parseFloat(r);
    return result;
}

// baza*inalt/2
function arieTriunghi(a, b) {
    let result= (parseFloat(a) * parseFloat(b)) /2;
    return result;
}

function figureCheck(figura) {
    let arie;
    if(figura==='circle') {
        arie= arieCerc(prompt('write the radius here: '));
    } else if(figura==='dreptunghi') {
        let a= prompt('Enter the first number: ');
        let b= prompt('Enter the second number: ');
        arie= arieDreptunghi(a, b);
    } else if(figura==='triunghi') {
        let a= prompt('Enter the first number: ');
        let b= prompt('Enter the second number: ');
        arie= arieTriunghi(a, b);
    } else {
        console.log('This figure is not defined');
        throw new Error('Not implemented');
    }
    return arie;
} 

module.exports.figureCheck= figureCheck;