// block scopes ( range )
function testLet() {
  let x = 5;

  if (true) {
    let x = 8; // a new varible
    let y = 10;
    console.log(x); // 8
    console.log(y); // 10
  }

  console.log(x); // 5
  // console.log(y) // ReferenceError: y is not defined
}

testLet()

// console.log(x); // ReferenceError: x is not defined