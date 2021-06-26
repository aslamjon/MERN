const http = require('http');
const {getAllProducts} = require('./controllers/productController')
const server = http.createServer(function(req, res) {
    if (req.url === '/products' && req.method == 'GET') {
        getAllProducts(req, res)
    }
})

server.listen(3000, () => console.log("Server is running"))