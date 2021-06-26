const { rejects } = require('assert');
const http = require('http');
const fs = require('fs');
const { resolve } = require('path');

const products = require('./data/data.json')
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
            fs.readFile('lesson 25/data/data.json','utf8', function(err, data) {
                if (err) console.log('error',err);
                else {
                    temp = JSON.parse(data);
                    temp.push(JSON.parse(body));
                    console.log(temp);
                    fs.writeFile('lesson 25/data/data.json', JSON.stringify(temp, null, 4), function(err){console.log(err)});
                }
            });
        })
    }
})
// let product = {
//  id: uuid.v4() // id generator
// }
server.listen(3000, () => console.log("Server is running"))