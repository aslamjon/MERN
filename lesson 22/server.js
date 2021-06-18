const http = require('http');
const server = http.createServer(doOnIncoming);
server.listen(3000, () => console.log("Server is running..."))

function doOnIncoming(request, response) {
    if (request.url === '/') {
        response.writeHead(200, {'Content-type': "text/html"}); // men senga html file yuborayapman
        // response.writeHead(200, {'Content-type': "text/plain"}); // men senga text file yuborayapman
        response.write("<html><body><h1>This is Home page</h1></body></html>");
        response.end();
    } else if (request.url === '/student') {
        response.writeHead(200, {'Content-type': "text/html"});
        response.write("This is student");
        response.end();

    } else if (request.url === '/admin') {
        response.writeHead(200, {'Content-type': "text/html"});
        response.write("This is admin");
        response.end();
    } else {
        response.writeHead(404, {'Content-type': "text/plain"});
        response.write("Invalid");
        response.end();
    }
}
