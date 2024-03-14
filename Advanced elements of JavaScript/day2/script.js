var regEx = /[0-9]{1,3}[a-z]*/g;

var text1 = "dnwbe 12324abdhwe 123AASQAA";

var test = text1.match(regEx);

// console.log(test);

// var text2 = "nbywenq andrei@yahoo.com ewbqenui21";
// var test2 = text2.match(regExEmail);
// console.log(test2);

function isEmailValid(email) {
    var regExEmail = /^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9\.]+\.[a-z]+$/;
    return regExEmail.test(email);
}

// console.log("Email1 is valid? ", isEmailValid("andrei@yahoo.com"));
// console.log("Email2 is valid? ", isEmailValid("andreiyahoo.com"));

// Verificam daca sirul de caractere incepe cu litera mare, contine doar litere mici 
// sau cifre si nu se termina in cifra


// Verificam daca sirul incepe sau nu cu - contine litere mici si numere si
// contine un sir consecutiv de 3 cifre 

var regEx2 = /^-?[0-9a-z]*[0-9]{3}[0-9a-z]*$/;
// console.log("-sddd111dbwhe is ", regEx2.test("-sddd111dbwhe"));
// console.log("-ddd12d12ddd is ", regEx2.test("-ddd12d12ddd"));

var regEx3 = /([A-Z]{2})([0-9]{4})([0-9]{1,2})/g;
var regEx4 = /([A-Z]{2})([0-9]{4})([0-9]{1,2})/;
var codes = "Code: DE12100 or FR75001 or RO12345";
var result = codes.matchAll(regEx3);
// console.log([...result]);
// console.log(codes.match(regEx3));
// console.log(codes.match(regEx4));


var emailRegEx = /[a-zA-Z0-9]+@([a-zA-Z]+)\.[a-z]{1,3}/g;
var testString = "andrei@yahoo.com andrei@gmail.ro rosu@yahoo.com rosu2@yahoo.com";
var email = [...testString.matchAll(emailRegEx)];
// console.log(email);
var count = {
    yahoo: 0,
    gmail: 0,
};

email.forEach(email => {
    // console.log(email[1]);
    count[email[1]]++;
});

console.log(count);

var replaceText = "This-is a-test-text pls-fix-it";
console.log(replaceText.replace(/\-/g, ' '));
console.log(testString.replace(/@([a-zA-Z]+)\./g, '@hotmail.'));


// var x = {
//     a: 12,
//     b: 40,
// }

// var y = {
//     a: 10,
//     c: 30,
// }

// var z = {
//     ...x,
//     // a: 12,
//     // b: 40,
//     ...y,
//     // a: 10,
//     // c: 30,
// }

// console.log(x);
// console.log(y);
// console.log(z);

function readInput() {
    var email = document.getElementById('email').value;
    var regExEmail = /^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9\.]+\.[a-z]+$/;
    if (regExEmail.test(email)) {
        alert('Signup successful!');
    } else {
        alert('Invalid email!');
    }
}

function readCode() {
    var codes = document.getElementById('codes').value;
    var regexCode = /[A-Z]{2}\-?[0-9]{5}/;
    var validCode = regexCode.test(codes) ? codes.match(regexCode) : "No valid code!";
    alert(validCode);
}

function censor() {
    var text = document.getElementById('censortext').value;
    var censorRegEx =/[0-9]/g;
    var newText = text.replace(censorRegEx, 'X');
    alert(newText);
}


//Description: Match any valid URL.
//Example: https:// www. example . com /page
//         http::// www. text . ro /gade /dsadwqewq /sada
