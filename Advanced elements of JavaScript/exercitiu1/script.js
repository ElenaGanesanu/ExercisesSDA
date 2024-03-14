const options = {
    method: 'GET'
}

const getButton = document.getElementById('getButton');
const input = document.getElementById('getInput');
getButton.onclick = () => {
    const id = input.value;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, options)
    .then((response) => response.json())
    .then((response) => {
        const title = document.getElementById('postTitle');
        const body = document.getElementById('postBody');
        title.innerText = response.title;
        body.innerText = response.body;

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, options)
        .then((response) => response.json())
        .then((response) => {
            const container= document.getElementById('comments');
            response.forEach(element => {
                const newDiv= document.createElement('div');
                newDiv.className= 'comment';
                const nameDiv= document.createElement('div');
                const emailDiv= document.createElement('div');
                const bodyDiv= document.createElement('div');
                nameDiv.innerText= element.name;
                newDiv.appendChild(nameDiv);
                emailDiv.innerText= element.email;
                newDiv.appendChild(emailDiv);
                bodyDiv.innerText= element.body;
                newDiv.appendChild(bodyDiv);
                container.appendChild(newDiv);
            });
        });
    });
};

document.getElementById('likePost').onclick = () => {
    alert(`post ${input.value} was liked`);
};
        //In div #comments I want to be added all the comments for post with id 
        //Construct an element of type div with class .comment and add in it 3 divs
        //First div will contain the name
        //Second div will contain the email
        //Third div will contain the body
        //Order: Contruct the .comment div -> append the 3 smaller divs in it -> append the .comment div in the #comments div

        //Bonus: When you click button #likePost open an alert with the message post ${id} was liked!