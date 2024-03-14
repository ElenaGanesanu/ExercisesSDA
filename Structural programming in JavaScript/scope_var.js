// functional scopes ( range )
function testVar() {
  var x = 5;

  if (true) { 
    var x = 8; // the same variable has an overwritten value
    var y = 10;
    console.log(x); // 8
    console.log(y); // 10
  }

  console.log(x); // 8
  console.log(y); // 10
}

testVar()

// console.log(x); // ReferenceError: x is not defined