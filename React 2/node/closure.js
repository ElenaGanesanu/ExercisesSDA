

const main = () => {
    let count = 0;

    const counter = () => {
        return ++count;
    }

    return counter;
}


const counter1 = main();
const counter2 = main();
console.log("counter1", counter1());//1
console.log("counter1", counter1());//2
console.log("counter1", counter1());//3
console.log("counter2", counter2());//1
console.log("counter2", counter2());//2
console.log("counter2", counter2());//3
console.log("counter1", counter1());//4
console.log("counter1", counter1());//5
console.log("counter1", counter1());//6