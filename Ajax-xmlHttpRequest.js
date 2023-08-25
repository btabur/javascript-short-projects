

//* AJAX   XMLHttpRequest

let data = [];
function getComments(url) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", ()=> {
        if(xhr.readyState==4 && xhr.status==200) {
           data = JSON.parse(xhr.responseText);
           data.forEach(comment => {
            console.log(comment.body);
            
           });
        }
    })
    xhr.open("GET",url);
    xhr.send();
}

getComments("https://jsonplaceholder.typicode.com/comments")    