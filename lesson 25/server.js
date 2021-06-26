const { rejects } = require('assert');
const http = require('http');
const fs = require('fs');
const { resolve } = require('path');


const products = require('./data/data.json')
let onlyOne = true;
let countId;
const server = http.createServer(function(req, res) {
    if (req.url === '/products' && req.method === 'GET') {
        const productPromise = new Promise((resolve, reject) => {
            resolve(products)
        })

        productPromise.then((data) => {
            res.writeHead(200, {"Content-type": "text/json"});
            res.write(JSON.stringify(data));
            res.end();
        }).catch((error) => {
            res.writeHead(404, {"Content-type": "text/json"});
            res.write(JSON.stringify(error));
            res.end();
        })
    } else if (req.url === '/products' && req.method === 'POST') {
        let body = '';
        req.on('data', function(chunk) {
            body+= chunk;
        })
        req.on('end', function() {
            let temp;
            fs.readFile('data/data.json','utf8', function(err, data) {
                if (err) console.log('error',err);
                else {
                    temp = JSON.parse(data);
                    if (onlyOne) {
                        countId = temp[temp.length-1].id;
                        onlyOne = false
                    }
                    countId++;
                    body = JSON.parse(body);
                    body.id = String(countId);
                    temp.push(body);
                    fs.writeFile('data/data.json', JSON.stringify(temp, null, 4), function(err){console.log(err)});
                }
            });
        })
    }
})
// let product = {
//  id: uuid.v4() // id generator
// }
server.listen(3000, () => console.log("Server is running"))