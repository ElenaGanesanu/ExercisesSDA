const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//forEach
list.forEach((currentElement, index) => {
    console.log({currentElement, index})
})

//map
const newList = list.map((currentElement, index) => {
    return `${currentElement} is on position ${index}.`
})

//filter
const filteredList = list.filter((currentElement, index) => {
    return currentElement < 5;
})

//reduce
const sum = list.reduce((accumulator, currentElement) => {
    return accumulator + currentElement;
}, 0)
console.log(sum)

const arr = [12, 100, 33, 22, 45, 1, 199, 4, 3, 2, 0];

//bubble sort
const bubbleSort = (ls) => {
    let flag = true;
    do{
        flag = false;
        for(let i=0; i<ls.length; i++){
            if(ls[i] > ls[i+1]){
                let temp = ls[i];
                ls[i] = ls[i+1];
                ls[i+1] = temp;
                flag = true;
            }
        }
    } while(flag);
    return ls;
}

console.log("sort =>", bubbleSort(arr));