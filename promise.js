
//  PROMISE  
function getUser(url) {
    return new Promise((resolve, reject) => {
        const xhr =new XMLHttpRequest();
        xhr.addEventListener("readystatechange",()=> {
            try {
                if(xhr.readyState===4 && xhr.status===200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            } catch (error) {
                reject(error);      
            }
        })
        xhr.open("GET",url);
        xhr.send();
    })
}

getUser("https://jsonplaceholder.typicode.com/users")
.then((data)=> {
    data.forEach(user => {
        console.log(user.name);
    });
})
.catch(err => console.log(err))
