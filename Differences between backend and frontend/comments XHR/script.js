const URL= "https://jsonplaceholder.typicode.com";

window.onload = function () {
    let commentsContainer= document.getElementById('commentsSection');
    fillComments();
}

function fillComments() {
    let xhr= new XMLHttpRequest();
    //cream obiectul cu care vom face request
    xhr.open('GET', `${URL}/comments`);
    //deschidem requestul specificand linkul spre care se indreapa
    xhr.send();
    //trimitem requestul
    xhr.onreadystatechange= (e) => createCommentsSection(xhr,e);
    //aplicam functia care sa se execute cand primim raspuns
}

function createCommentsSection(request, e) {
    if(request.status===200) {  //verificam daca requestul a avut success
        let commentsList= JSON.parse(request.responseText); //transformam rasp de la server din string json in obiect js
        console.log(commentsList);
        let commentsContainer= document.getElementById('commentsSection');  //obtinem sectiunea de comentarii pe care urmeaza sa o populam
        commentsContainer.innerHTML= " ";  //golim sectiunea de comentarii
        for(let comment of commentsList) {  //parcurgem lista de comentarii obtinuta de la server
            let commentElement= createcommentElement(comment);  //cream elem html pt comentarii
            commentsContainer.appendChild(commentElement); //adaugam comentariul in sectiunea html
        }
    } else {
        alert(e)
    }
}

function createcommentElement(comment) {
    let elem= document.createElement("li");
    let elemBody= document.createElement("p");
    elemBody.innerText= `Comment: ${comment.body}`;
    let elemUser= document.createElement("p");
    elemUser.innerText= `Email: ${comment.email}`;
    let elemTitle= document.createElement("p");
    elemTitle.innerText= `Title: ${comment.name}`;
    elem.appendChild(elemTitle);
    elem.appendChild(elemUser);
    elem.appendChild(elemBody);
    elem.style.cursor= "pointer";
    elem.onclick= (ev => goToComment(comment.id));
    return elem;
}

function goToComment(commentId) {
    console.log(commentId);
    window.localStorage.setItem("Current comment id", commentId); //stocam id-ul comentariului pe care s-a dat click in browser
    window.location.href= "comment.html"; //trecem la pagina fiecarui comentariu
}

function fillLessComments() {
    let count= document.getElementById("countInput").ariaValueMax;
    let xhr= new XMLHttpRequest();
    xhr.oprn("GET",`${URL}/comments?_limit=${count}`);
    xhr.send();
    xhr.onreadystatechange= (e) => createCommentsSection(xhr,e);
}