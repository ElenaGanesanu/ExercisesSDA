const url="https://jsonplaceholder.typicode.com";

window.onload = function () {
    loadComment();
}

function loadComment() {
    let commentId = window.localStorage.getItem("currentCommentId");
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `${url}/comments/${commentId}`);
    xhr.send();
    xhr.onreadystatechange = (e) => createCommentElement(xhr, e);
}

function createCommentElement(request,e) {
    if(request.status===200) {
        let comment = JSON.parse(request.responseText);
        let elem = document.createElement("div");
        let elemBody = document.createElement("p");
        elemBody.innerText = `Comment: ${comment.body}`;
        let elemUser = document.createElement("p");
        elemUser.innerText = `Email: ${comment.email}`;
        let elemTitle =  document.createElement("p");
        elemTitle.innerText = `Title: ${comment.name}`;
        elem.appendChild(elemTitle);
        elem.appendChild(elemUser);
        elem.appendChild(elemBody);
        let container = document.getElementById("commentContainer");
        container.replaceChildren(elem);
    }else{
        alert(e)
    }
}

function goNext() {
    let commentId = parseInt(window.localStorage.getItem("currentCommentId"));
    window.localStorage.setItem("currentCommentId", commentId+1);
    loadComment();
}