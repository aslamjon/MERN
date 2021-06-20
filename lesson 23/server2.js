const http = require('http');
const fs = require('fs');
const server = http.createServer(onRequest);
server.listen(2500, () => console.log("server is running"));

function onRequest(req, res) {
    console.log(req.method);
    if (req.url == '/') {
        fs.readFile('index2.html', null, function(err, data) {
            if (err) console.log(err);
            else {
                res.writeHead(200, {"Content-type": 'text/html'});
                res.write(data)
            }
            res.end();
        })
    }
}

