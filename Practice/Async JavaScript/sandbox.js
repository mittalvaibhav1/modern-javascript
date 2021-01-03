
// Promises
const getTodos = () => {
    return new Promise((resolve,reject) => {

        const request = new XMLHttpRequest();
        request.open('GET','https://jsonplaceholder.typicode.com/todos/');
        request.send();
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if(request.readyState === 4) {
                reject('could not fetch data');
            }
        });
    })
}

getTodos()
.then(response => {
    console.log("response",response);
})
.catch(error => {
    console.log(error);
})

// const request = new XMLHttpRequest();

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// request.send();

// request.addEventListener('readystatechange', () => {
//     if(request.readyState === 4 && request.status === 200) {
//         console.log(request.responseText);
//     } else if(request.readyState === 4){
//         console.log('Nahi');
//     }
// });

// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange',() => {
//     //* console.log(request,request.readyState);
//     if(request.readyState === 4) {
//         console.log(request.responseText);
//     }
// });

// request.open('GET','https://jsonplaceholder.typicode.com/todos/');
// request.send();

// readyState values

// 0 - UNSENT (Open() method not yet called)
// 1 - OPENED (Open() has been called)
// 2 - HEADERS_RECIVED (send() has been called , and headers and status are available)
// 3 - LOADING (Downloading; responseText contains partial data)
// 4 - DONE (Complete)