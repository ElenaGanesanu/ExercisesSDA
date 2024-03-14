//DEBUGGING task

//Fibonacci sequence
function fibo(n) {
    var a = 0;
    var b = 1;
    var arr = [a, b];
    var c = 0;
    
    //every element of the sequence is the sum of two previous ones
    for(let i = 2; i < n; i++) {
        // c = arr[arr.length-1] + arr[arr.length-2]
        c= a+b;
        a=b;
        b=c;
        arr.push(c);
    }
    return arr;
}


var f = fibo(10);

//displays: [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
//should be: [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
console.log(f);