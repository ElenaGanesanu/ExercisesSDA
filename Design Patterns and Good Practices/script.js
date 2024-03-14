const arr = [14, 8, 30, 21, 32];

function miniMaxSum(arr) {
    console.log(arr)
    // arr.sort(functie => comparatie)
    // unde a,b reprezinta 2 numere din array care se compara una cu cealalta
    arr.sort((a,b) => a - b);
    console.log(arr)
    let sumMin = 0;
    let sumMax = 0;
    for(i = 0; i <= arr.length - 2; i++) {
        sumMin += [i];
    }
    for(j = arr.length -1; j > 0; j--) {
        sumMax +=[j];
    }
let diferenta = sumMax - sumMin;
console.log(diferenta);
}
miniMaxSum(arr);