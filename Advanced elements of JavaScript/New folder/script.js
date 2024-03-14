function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNumbersArray(length) {
    let randomNumbers = [];
    for (let i = 0; i < length; i++) {
        randomNumbers.push(getRandomNumber(1, 100000));
    }
    return randomNumbers;
}

var arr50 = getRandomNumbersArray(50);
var arr500 = getRandomNumbersArray(500);
var arr5000 = getRandomNumbersArray(5000);
var arr50000 = getRandomNumbersArray(50000);

//Bubble sort
function bubbleSort(arr) {
    let startTime = new Date().getTime();

    for(let i = 0; i < arr.length; i++) {
        let wasElementSwapped= false;
        for(let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                wasElementSwapped= false
            }
        }
    if(!wasElementSwapped) break;
    }
    console.log(arr);
    console.log(`Sorting took ${new Date().getTime() - startTime}ms`);
}

bubbleSort(arr50); // 1ms
bubbleSort(arr500); // 2ms
bubbleSort(arr5000); // 31ms
bubbleSort(arr50000); // 4000ms