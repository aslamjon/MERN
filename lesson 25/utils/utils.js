const fs = require('fs');

function getData(req, res) {
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
    return promise;
}

function writeToFile(data, textToMessage) {
    fs.writeFile(__dirname+'/../data/data.json', JSON.stringify(data, null, 4), 'utf8', function (err) {
        if (err) console.log(err);
        else {
            res.writeHead(200, { "Content-type": 'text/json' });
            res.write(JSON.stringify({ message: textToMessage }));
            res.end();
        }
    })
}

module.exports = {
    getData,
    writeToFile
}