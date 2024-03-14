const modal = document.getElementById("modal");
const formTitle = document.getElementById("form-title");
const formDescription = document.getElementById("form-description");
const todoCol = document.getElementById('todo');
const inProgCol = document.getElementById('inProgress');
const doneCol = document.getElementById('done');

console.dir(modal);

const stats = ['todo', 'inProgress', 'done'];

// const task = {
//     title: "",
//     description: "",
//     status: 0
// };

const tasksList = [];


function showModal() {
    modal.style.display = 'flex';
}

function hideModal() {
    modal.style.display = 'none';
}

function getFormValues() {
    const taskTitle = formTitle.value;
    const taskDescription = formDescription.value;
    const newTask = {
        title: taskTitle,
        description: taskDescription,
        status: 0
    }

    tasksList.push(newTask);
    addTaskToColumns()
    hideModal();
    console.log(tasksList)
}


function card(taskTitle, taskDescription, task) {
    const container = document.createElement('div');
    container.className = "card-container";
    const title = document.createElement('p');
    title.innerText = taskTitle;
    title.style = "text-align: center;"
    const description = document.createElement('textarea');
    description.innerText = taskDescription;
    description.readOnly = true;
    const status = document.createElement('select');
    status.onchange = (e) => {
        task.status = e.target.value;
        addTaskToColumns();
    }
    const todoOpt = document.createElement('option');
    todoOpt.innerText = "To Do";
    todoOpt.value = 0;
    todoOpt.selected = task.status === 0;
    const inProgOpt = document.createElement('option');
    inProgOpt.innerText = "In Progress";
    inProgOpt.value = 1;
    inProgOpt.selected = task.status === '1';
    const doneOpt = document.createElement('option');
    doneOpt.innerText = "Done";
    doneOpt.value = 2;
    doneOpt.selected = task.status === 2;

    status.append(todoOpt, inProgOpt, doneOpt);
    container.append(title, description, status);
    return container;
}

function addTaskToColumns() {

    todoCol.innerHTML = "";
    inProgCol.innerHTML = "";
    doneCol.innerHTML = "";

    tasksList.forEach(task => {
        const taskCard = card(task.title, task.description, task);
        
        switch (task.status) {
            case 0:
                todoCol.append(taskCard);
                break;
            case '1':
                inProgCol.append(taskCard);
                break;
            case '2':
                doneCol.append(taskCard);
                break;
        }
    })
}
