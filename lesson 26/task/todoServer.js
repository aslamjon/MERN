const http = require('http');
const fs = require('fs');
const todolist = require('./todolist.json');

let onlyOne = true;
let countId = 0;

const server = http.createServer(function(req, res) {
    function find() {
        let val = req.url.match(/\w+/);
        console.log(val);
        for (let index in todolist) {
            if (val == todolist[index].id) {
                indexFindElem = index;
                return todolist[index];
            }
        }
        return undefined;
    }
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, {"Content-type":"text/json"});
        res.write(JSON.stringify(todolist));
        res.end();
    } else if (req.url.match(/\w+/) && req.method === 'POST') {
        let indexFindElem;
        let findElem = find().id;
        if (findElem) {
            const promise = new Promise((resolve, reject) => {
                let body = '';
                req.on('data', (chunk) => body += chunk);
                req.on('end', () => resolve(body));
                req.on('error', (err) => {
                    console.log(err);    
                    reject("Error")
                })
            });
            promise.then((data) => {
                let update = JSON.parse(data);
                todolist[indexFindElem].task = update.task;
                todolist[indexFindElem].done = update.done;
                fs.writeFile('todolist.json', JSON.stringify(todolist, null, 4), 'utf8', (err) => {
                    if (err) console.log(err);
                    else {
                        res.writeHead(200, {"Content-type": "text/json"});
                        res.write(JSON.stringify({ massege: "Data have been updated" }));
                        res.end();
                    }
                })

            }).catch((err) => console.log(err))
        } else {
            res.writeHead(200, {"Content-type": "text/json"});
            res.write(JSON.stringify({ massege: "Data not found" }));
            res.end();
        }
    } else if (req.url.match(/\w+/) && req.method === 'GET') {
        let foundData = find();
        if (foundData) {
            res.writeHead(200, {"Content-type":'text/json'});
            res.write(JSON.stringify(foundData));
        } else {
            res.writeHead(200, {"Content-type":'text/json'});
            res.write(JSON.stringify({ message: 'data not found' }));
        }
        res.end();
    } else if (req.url == '/' && req.method === 'PUT') {
        // Create Task
        const promise = new Promise((resolve, reject) => {
            let body = '';
            req.on('data', (chunk) => body += chunk);
            req.on('end', () => resolve(body));
            req.on('error', (err) => {
                console.log(err);    
                reject("Error")
            })
        });
        promise.then((data) => {
            let update = JSON.parse(data);
            if (onlyOne) {
                countId = todolist[todolist.length-1].id;
                onlyOne = false;
            }
            countId++;
            let temp = {
                id: countId,
                task: update.task,
                done: update.done
            }
            todolist.push(temp);
            fs.writeFile('todolist.json', JSON.stringify(todolist, null, 4), 'utf8', (err) => {
                if (err) console.log(err);
                else {
                    res.writeHead(200, {"Content-type": "text/json"});
                    res.write(JSON.stringify({ massege: "Data have added" }));
                    res.end();
                }
            })

        }).catch((err) => {
            console.log(err);
            res.writeHead(200, {"Content-type": "text/json"});
            res.write(JSON.stringify({ massege: "Data haven't added" }));
            res.end();
        })
    } else if (req.url.match(/\w+/) && req.method === 'DELETE') {
        try {
            let id = find().id;
            if (id) {
                let result = todolist.filter((value, index) => value.id !== id);
                fs.writeFile('todolist.json', JSON.stringify(result, null, 4), 'utf8', (err) => {
                    if (err) console.log(err);
                    else {
                        res.writeHead(200, {"Content-type":'text/json'});
                        res.write(JSON.stringify({ massege: "Data have deleted" }));
                        res.end();
                    }
                })
            } 
        } catch (error) {
            res.writeHead(404, {"Content-type":"text/json"});
            res.write(JSON.stringify( { massege: "Data Not Found" } ));
            res.end();
        }
    }
    else {
        res.writeHead(200, {"Content-type": "text/json"});
        res.write(JSON.stringify({ massege: "Invalid url or method" }));
        res.end();
    }
    console.log(req.url, req.method);

})
    .listen(3000, () => console.log("Server is running"));


