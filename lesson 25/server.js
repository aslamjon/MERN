const { rejects } = require('assert');
const http = require('http');
const fs = require('fs');
const { resolve } = require('path');

const products = require('./data/data.json')
const { getAllProducts, getElementById, createPost, deleteElement, updateProduct } = require('./controllers/productController');

const server = http.createServer( function (req, res) {
    if (req.url === '/products' && req.method === 'GET') {
        getAllProducts(req, res);
    } else if (req.url.match(/\/products\/\w+/) && req.method === 'GET') {
        let id = req.url.split('/')[2];
        getElementById(req, res, id);
    } else if (req.url === '/products' && req.method === 'POST') {
        createPost(req, res)
    } else if (req.url.match(/\/products\/\w+/) && req.method === 'DELETE') {
        let id = req.url.split('/')[2];
        deleteElement(req, res, id)
    } else if (req.url.match(/\/products\/\w+/) && req.method === 'PUT') {
        const id = req.url.split('/')[2];
        updateProduct(req, res, id);
    } 
    else {
        res.end("Invalid url")
    }
})
/* CRUD
    Create
    Read
    Update
    Delete
*/

server.listen(3000, () => console.log("Server is running"));