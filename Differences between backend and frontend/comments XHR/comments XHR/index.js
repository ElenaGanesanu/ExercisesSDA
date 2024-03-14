const url="https://jsonplaceholder.typicode.com";

window.onload= function () {
   let commentsContainer= document.getElementById("commentsSection"); 
    fillComments();
}

function fillComments() {
    let xhr = new XMLHttpRequest();    // cream obiectul cu care vom fface request
    xhr.open("GET", `${url}/comments`);   // deschidem requewstul specificand linkul spre care se indreapta
    xhr.send();  // trimitem requestul 
    xhr.onreadystatechange=(e)=> createCommentsSection(xhr,e);   //aplicam functia care sa se execute cand primim raspuns
}

function createCommentsSection(request,e) {
    if(request.status===200) {          // verificam daca requertul a avut succes
        let commentsList = JSON.parse(request.responseText);   //transformam raspunsul de la server din string json in obiect JS
        console.log(commentsList);          
        let commentsContainer = document.getElementById("commentsSection");         // obtinem sectiunea de comentarii pe care urmeaza sa o populam
        commentsContainer.innerHTML="";         // golimm sectiunea de comentarii 
        for(let comment of commentsList){       // parcurgem lista de comentarii obtinuta de la server
            let commentElement = createCommentElement(comment);         // ceream elementul html penmtru comentarii
            commentsContainer.appendChild(commentElement);      // adaugam comentariul in sectinunea html
        }
    } else {
        alert(e);
    }
}

function createCommentElement(comment) {
    let elem = document.createElement("li");
    let elemBody = document.createElement("p");
    elemBody.innerText = `Comment: ${comment.body}`;
    let elemUser = document.createElement("p");
    elemUser.innerText = `Email: ${comment.email}`;
    let elemTitle =  document.createElement("p");
    elemTitle.innerText = `Title: ${comment.name}`;
    elem.appendChild(elemTitle);
    elem.appendChild(elemUser);
    elem.appendChild(elemBody);
    elem.style.cursor = "pointer";
    elem.onclick = (ev) =>goToComment(comment.id);
    return elem;
}

function goToComment(commentId) {
    console.log(commentId);
    window.localStorage.setItem("currentCommentId", commentId);     // stocam id ul comentariului pe care s a dat click in browser
    window.location.href = "comment.html";     // r=trecem la pagina de comentariu 
}

function fillLessComments() {
    let count = document.getElementById("countInput").value;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `${url}/comments?_limit=${count}`);
    xhr.send();
    xhr.onreadystatechange=(e)=> createCommentsSection(xhr,e);
}