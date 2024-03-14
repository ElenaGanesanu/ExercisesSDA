const app = document.getElementById("app");

const createCounter = (props) => {
    let count = 0;

    const counter = () => {
        const container = document.createElement("div");
        container.className = "counter-container"
        container.style.backgroundColor = props?.bgColor;
        const display = document.createElement("div");
        display.style.color = props?.color;
        display.innerText = count;
        display.className = "counter-display"
        const controls = document.createElement("div");
        controls.className = "counter-controls"
        const incBtn = document.createElement("button");
        incBtn.innerText = "++";
        incBtn.onclick = () => {
            count++
            display.innerText = count;
        }
        const decBtn = document.createElement("button");
        decBtn.innerText = "--";
        decBtn.onclick = () => {
            count--;
            display.innerText = count;
        }
        controls.append(decBtn, incBtn);
        container.append(display, controls)
        return container;
    }
    return counter;
}

const build = createCounter({bgColor: "green", color: "white"});
const build2 = createCounter({bgColor: "darkred", color: "white"});

const counterComponent = build();
const counterComponent2 = build2();

app.append(counterComponent, counterComponent2);
