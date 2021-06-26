const http = require('http')
const fs = require('fs');
const querystring = require('querystring');

const server = http.createServer(onRequest)
server.listen(3000, () => console.log('Server is running'))

function onRequest(req, res) {
    if (req.url === '/' && req.method === 'GET') {
        const myReader = fs.createReadStream(__dirname + '/index.html')
        myReader.pipe(res)
    } else if (req.url === '/' && req.method === 'POST') {
        let body = "";
        req.on('data', function(chunk) {
            body += chunk;
        });
        req.on('end', function() {
            console.log(body);
            let user = querystring.parse(body); // browserdan kelgan malumotni obj holatidi tayyorlab beradi
            console.log(user);
            fs.writeFile(__dirname + '/data.txt', JSON.stringify(user), function(err) {
                if (err) {
                    res.writeHead(500, {"Content-type": "text/html"})
                    res.write("<h1>Internel server error</h1>")
                } else {
                    res.writeHead(200, {"Content-type": "text/html"})
                    res.write("<h1>User has been saved</h1>")
                }
                res.end()
            })

            // res.writeHead(200, { "Content-type": "text/html" });
            // res.write('');

        })
    }
}