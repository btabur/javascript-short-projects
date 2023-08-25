
//  FETCH API
function getPhotoFromUrl(url) {

    fetch(url).then((response) => response.json())
    .then((data)=> {
        data.forEach(photo => {
            console.log(photo.title)
        });
    })
}

getPhotoFromUrl("https://jsonplaceholder.typicode.com/photos");