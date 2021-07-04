const fs = require('fs');
const products = require('../data/data.json')

const {getData, writeToFile} = require('../utils/utils');

let onlyOne = true;
let countId;
async function getAllProducts(req, res) {
    const productPromise = new Promise((resolve, reject) => {
        resolve(products)
    })

    productPromise.then((data) => {
        res.writeHead(200, { "Content-type": "text/json" });
        res.write(JSON.stringify(data));
        res.end();
    }).catch((error) => {
        res.writeHead(404, { "Content-type": "text/json" });
        res.write(JSON.stringify(error));
        res.end();
    })
}

async function getElementById(req, res, id) {
    let needfulData;
    fs.readFile('data/data.json', 'utf8', function (err, data) {
        if (err) console.log(err);
        else {
            needfulData = products.find((product) => product.id == id);
            if (!needfulData) {
                res.writeHead(404, { "Content-type": "text/json" });
                res.write(JSON.stringify({ message: "Product not found" }));
            } else {
                res.writeHead(200, { "Content-type": "text/json" });
                res.write(JSON.stringify(needfulData));
            }
            res.end();
        }
    })
}

async function createPost(req, res) {
    try {
        const product = await getData(req, res);
        const productObj = JSON.parse(product);
        if (onlyOne) {
            countId = products[products.length - 1].id;
            onlyOne = false
        }
        countId++;
        const newProduct = {
            id: String(countId),
            name: productObj.name,
            description: productObj.description,
            price: productObj.price
        }
        products.push(newProduct);
        writeToFile(products, "Product has been saved");
        
    } catch (error) {
        res.writeHead(400, { "Content-type": 'text/json' });
        res.write(JSON.stringify({ message: "Bad request" }));
        res.end();
    }
}

async function deleteElement(req, res, id) {
    let productForDelete = products.find((value) => value.id == id);
    if (!productForDelete) {
        res.writeHead(400, { "Content-type": "text/json" });
        res.write(JSON.stringify({ massege: "Bad request" }))
        res.end();
    } else {
        let ready = products.filter((value) => value.id !== productForDelete.id);

        fs.writeFile('../data/data.json', JSON.stringify(ready, null, 4), 'utf8', function (err) {
            if (err) console.log(err);
            else {
                res.writeHead(200, { "Content-type": "text/json" });
                res.write(JSON.stringify({ massege: "product have been deleted" }))
                res.end();
            }
        })
    }
}

async function updateProduct(req, res, id) {
    const product = products.find((product) => product.id === id)
    if (!product) {
        res.writeHead(404, { "Content-type": "text/json" })
        res.write(JSON.stringify({ message: "Product not found" }))
        res.end()
    }
    else {
        const promise = new Promise((resolve, reject) => {
            let body = '';
            req.on('data', function (chunk) {
                body += chunk;
            })
            req.on('end', function () {
                resolve(body)
            })
            req.on('error', function (err) {
                console.log(err);
                reject("Error");
            })
        })
        promise.then(data => {
            const { name, description, price } = JSON.parse(data)
            let updatedProduct = {
                name: name || product.name,
                description: description || product.description,
                price: price || product.price
            }

            let index = products.findIndex(p => p.id === id)

            products[index] = {
                id,
                ...updatedProduct
            }
            fs.writeFile('../data/data.json', JSON.stringify(products, null, 4), 'utf8', function (err) {
                if (err) console.log(err);
                else {
                    res.writeHead(200, { "Content-type": "text/json" });
                    res.write(JSON.stringify({ massege: "product have been updated" }))
                    res.end();
                }
            })
        })
    }
}

module.exports = {
    getAllProducts,
    getElementById,
    createPost,
    deleteElement,
    updateProduct

}
