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
    } 
    // bu usul ishlaydi lekin errorlarni tutishda muamo bo'ladi undan tashqari code ichma-ich ketadi.
    // else if (req.url === '/products' && req.method === 'POST') {
    //     let body = '';
    //     req.on('data', function(chunk) {
    //         body+= chunk;
    //     })
    //     req.on('end', function() {
    //         let temp;
    //         fs.readFile('data/data.json','utf8', function(err, data) {
    //             if (err) console.log('error',err);
    //             else {
    //                 temp = JSON.parse(data);
    //                 if (onlyOne) {
    //                     countId = temp[temp.length-1].id;
    //                     onlyOne = false
    //                 }
    //                 countId++;
    //                 body = JSON.parse(body);
    //                 body.id = String(countId);
    //                 temp.push(body);
    //                 fs.writeFile('data/data.json', JSON.stringify(temp, null, 4), function(err){console.log(err)});
    //             }
    //         });
    //     })
    // } 
    
    else if (req.url.match(/\/products\/\w+/) && req.method === 'GET') {
        id = req.url.split('/')[2];
        let needfulData;

        fs.readFile('data/data.json','utf8', function(err, data) {
            if (err) console.log(err);
            else {
                needfulData = products.find((product) => product.id == id);
                if (!needfulData) {
                    res.writeHead(404, {"Content-type": "text/json"});
                    res.write(JSON.stringify({message: "Product not found"}));
                } else {
                    res.writeHead(200, {"Content-type": "text/json"});
                    res.write(JSON.stringify(needfulData));
                }
                res.end();
            }
        })
    } else if (req.url === '/products' && req.method === 'POST') {
        
        const promise = new Promise((resolve, reject) => {
            let body = '';
            req.on('data', function(chunk) {
                body += chunk;
            })
            req.on('end', function() {
                resolve(body)
            })
            req.on('error', function(err) {
                console.log(err);
                reject("Error");
            })
        })

        promise.then((data) => {

            const productObj = JSON.parse(data);
            if (onlyOne) {
                countId = products[products.length-1].id;
                onlyOne = false
            }
            countId++;
            const product = {
                id: String(countId),
                name: productObj.name,
                description: productObj.description,
                price: productObj.price
            }
            products.push(product);

            fs.writeFile('./data/data.json', JSON.stringify(products, null, 4), 'utf8', function(err) {
                if (err) console.log(err);
                else {
                    res.writeHead(200, { "Content-type": 'text/json' });
                    res.write(JSON.stringify({ message: "Product has been saved"}));
                    res.end();
                }
            })
        }).catch(error => {
            console.log(error);
            res.writeHead(400, { "Content-type": 'text/json' });
            res.write(JSON.stringify({ message: "Bad request"}));
            res.end();
        })
    } else if (req.url.match(/\/products\/\w+/) && req.method === 'DELETE') {
        id = req.url.split('/')[2];
        let productForDelete = products.find((value) => value.id == id);
        if (!productForDelete) {
            res.writeHead(400, {"Content-type": "text/json"});
            res.write(JSON.stringify({ massege: "Bad request"}))
            res.end();
        } else {
            let ready = products.filter((value) => value.id !== productForDelete.id);

            fs.writeFile('./data/data.json', JSON.stringify(ready, null, 4), 'utf8', function(err) {
                if (err) console.log(err);
                else {
                    res.writeHead(200, {"Content-type": "text/json"});
                    res.write(JSON.stringify({massege: "product have been deleted"}))
                    res.end();
                }
            })
        }
        
    } else {
        res.end("Invalid url")
    }
})

// postman bilan json yuboramiz va ma'lumotni update qiladi agar malumot bo'lmasa error beradi
// to-do listni server bilan yaratish 

// let product = {
//  id: uuid.v4() // id generator
// }
server.listen(3000, () => console.log("Server is running"));