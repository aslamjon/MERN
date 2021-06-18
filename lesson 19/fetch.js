
let futureDate = fetch("https://jsonplaceholder.typicode.com/users");
futureDate
    .then(response => {return response.json();})
    .then(res => console.log(res))
console.log(futureDate);

let urls = ["https://jsonplaceholder.typicode.com/users", "https://jsonplaceholder.typicode.com/posts", "https://jsonplaceholder.typicode.com/todos"]

function promisify(url) {
    return fetch(url);
}

let promises = urls.map(promisify)

Promise.all(promises)
    .then(result => {
        return result.map(fetchData => fetchData.json());
    })
    .then(res => {
        console.log(res);
    })