const products = require('../data/data.json');
const uuid = require('uuid');


async function getProducts () {
    return new Promise (function (resolve, reject) { resolve(products) })
}

async function getProductById(id) {
    return new Promise ((resolve, reject) => {
        const product = products.find((product) => product .id === id);
        resolve(product)
    })
}
async function writeToFile(product) {
    return new Promise((resolve, reject) => {
        const newProduct = {
            id: uuid.v4(),
            ...product
        }
        products.push(newProduct)
        fs.writeFile('./data/data.json', JSON.stringify(products, null, 4), 'utf8', function(err) {
            if (err) reject(err);
            else resolve(newProduct);
        })
    })
}

async function deleteById(id) {
    return new Promise ((resolve, reject) => {
        const updatedProduct = products.filter(product => product.id != id)
        fs.writeFile('./data/data.json', JSON.stringify(updatedProduct, null, 4), 'utf8', function(err) {
            if (err) reject(err);
            else resolve();
        })
    })
}

module.exports = {
    getProducts,
    getProductById,
    writeToFile,
    deleteById
}