const fs = require('fs');
const http = require("http");

let data = fs.readFileSync('mackbook.txt', 'utf8');
data = data.split(',');

const server = http.createServer(forHttp);
server.listen(2500, () => console.log('Server is running'));


function forHttp(request, response) {
    if (request.url == '/') {
        response.writeHead(200, {'Content-type': "text/html"});
        response.write(`<a href='/product' class=''>Go to Product</a>`);
        response.end();
    } else if (request.url == '/product') {
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write(`
        <html>
        <head>
            <style>
                body {
                    display: flex;
                    juctify-content: center;
                }
                .container {
                    margin: 10px;
                }
                .card {
                    width: 400px;
                }
                img {
                    width: 100%;
                }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='card'>
                    <img src="${data[1]}">
                    <h1 class='title'>${data[0]}</h1>
                    <h3 class='description'>${data[2]}</h3>
                    <h2 class='price'>${data[3]}</h2>
                </div>
            </div>
        </body>
        </html>
        `);
        response.end();
    } else {
        response.end('Page not found');
    }
}
