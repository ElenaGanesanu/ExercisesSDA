let arraysPart = () => {
    let func = (el) => {
        if (el % 2 == 0) {
            console.log(`Nr par ${el}`);
        } else {
            console.log(`Nr impar ${el}`)
        }
    }

    let printNothing = () => {console.log("Nothing!")};

    function runArray(initArray) {
        //Initializare array
        let arr = [...initArray];

        console.log(arr);

        //Adaugare element array
        arr = [...arr, 56];
        console.log(arr);

        arr.push(99);
        console.log(arr);

        //Eliminare element din array
        arr.pop();
        console.log(arr);

        arr.shift();
        console.log(arr);

        arr.splice(1, 2);
        console.log(arr);

        //Accesare
        console.log(arr[0], arr[1]);

        //Iterare
        for(let i=0; i < arr.length; i++) {
            console.log("Print", arr[i]);
        }

        arr.forEach((element) => {
            console.log("From for each:", element);
        });
    }

    runArray([1,2,3,4]);

    //Se initializeaza array-ul [1,2,3,4,5,6,7] se doreste sa se elimine primul si ultimul element din array.
    //Dupa care sa se afiseze pe ecran Nr par {{numaru}} / Nr impar {{numaru}} pentru fiecare element din array ramas
    //Output: Nr par 2 Nr impar 3 Nr par 4 Nr impar 5 Nr par 6

    function ex1(arr) {
        arr.pop();
        arr.shift();
        arr.forEach(func);
        arr.forEach(printNumber);
        arr.forEach(printNothing);
    }

    function printNumber(el) {
        if (el % 2 == 0) {
            console.log(`Nr par ${el}`);
        } else {
            console.log(`Nr impar ${el}`)
        }
    }

    ex1([1,2,3,4,5,6,7]);

    const x = {
        a: 0,
        b: 0,
        c: {
            val: 0,
        },
    }

    const xArry = [{...x}, {...x}, {...x}]; // Problem with reference to c
    const xArrayFixed = [structuredClone(x), structuredClone(x), structuredClone(x)];

    xArrayFixed[0].a = 50;
    xArrayFixed[0].b = 100;
    xArrayFixed[0].c.val = 300;
    console.log(xArrayFixed);

    //This is reference copy
    let x2 = x;
    //This is shalow copy
    x2 = {...x}; //Note only works for one layer depth
    //This is deep copy
    // let x2 = JSON.parse(JSON.stringify(x));
    x2 = structuredClone(x);

    // console.log(JSON.stringify({x: 5, f: () => {console.log("SALUT")}})); // Doesn't 

    x2.a = 30;
    console.log({x, x2});
}
// arraysPart();


/* --------------- LISTE --------------------- */

let listPart = () => {

    class ListNode {
        val;
        next;

        constructor(val) {
            this.val = val;
        }

        printAll(output = '') {
            output += `${this.val} -> `;
            if (this.next != undefined) {
                this.next.printAll(output);
            } else {
                console.log(`${output}NULL`);
            }
        }

        //20 -> 7 -> 13 -> 5 -> 19 -> NULL
        // max = 20

        findMax(max) {
            if (max == undefined) {
                max = this.val;
            } else {
                max = Math.max(this.val, max);
            }

            if (this.next) {
                return this.next.findMax(max);
            } else {
                return max;
            }
        }

        findMaxSimplified() {
            if (max < this.val) {
                max = this.val;
            }
            if (this.next)
                this.next.findMaxSimplified();
        }
    }

    function deleteFirstElement(HEAD) {
        return HEAD.next;
    }

    function deleteLastElement(HEAD) {
        let index = HEAD;
        while(index.next && index.next.next) {
            index = index.next;
        };
        index.next = undefined;
    }

    let HEAD = new ListNode(20);
    let n1 =  new ListNode(7);
    HEAD.next = n1;
    let n2 = new ListNode(13);
    n1.next = n2;
    let n3 = new ListNode(5);
    n2.next = n3;
    let n4 = new ListNode(19);
    n3.next = n4;

    HEAD.printAll();
    console.log(HEAD.findMax()); // 20

    var max = HEAD.val;
    HEAD.findMaxSimplified();
    console.log(max);

    HEAD = deleteFirstElement(HEAD);
    HEAD.printAll();

    deleteLastElement(HEAD);
    HEAD.printAll();

};

// listPart();

/* --------------- STACK ----------------- */

let stackPart = () => {

    class Stack {
        values = [];

        push(val) {
            this.values.push(val);
        }

        pop() {
            this.values.pop();
        }

        print() {
            console.log("TOP");
            this.values.reverse().forEach((el) => {
                console.log(el);
                console.log('||')
                console.log('\\/');
            })
            console.log("BOTTOM");
            this.values.reverse();
        }
    }

    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(4);
    stack.push(23);
    stack.print();
    stack.pop();
    stack.print();
}

// stackPart();


/* --------------- QUEUE -------------- */

queuePart = () => {

    class Queue {
        values = [];

        push(val) {
            this.values.push(val);
        }

        pop() {
            this.values.shift();
        }

        printAll() {
            this.values.forEach(el => console.log(`${el}`));
        }
    }

    let queue = new Queue();
    queue.push(23);
    queue.push(34);
    queue.push(66);
    queue.printAll();
    queue.pop();
    queue.printAll(); // 34 66
}

// queuePart();

// let list = [1,2,3,4,5,6];

// list.splice(1,2);
// //ECHIVALENTE 
// list = [...list.slice(0,1), ...list.slice(3)];

// console.log(list);

/* ------------ TREE ---------------- */

treePart = () => {

    class TreeNode {
        value;
        children = [];

        constructor(val) {
            this.value = val;
        }
    }

    let root = new TreeNode(0);
    root.children = [new TreeNode(1), new TreeNode(2)];
    root.children[0].children = [new TreeNode(3), new TreeNode(4)];
    root.children[1].children = [new TreeNode(5), new TreeNode(6)]
}

treePart();