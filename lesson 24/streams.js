const fs = require('fs');

const myReadStream = fs.createReadStream('data.txt', 'utf8');
const myWriteStream = fs.createWriteStream('data.txt', 'utf8');
myReadStream.pipe(myWriteStream); // kelayotgan kichik malumotni birdan yozadi
// myReadStream.on('data', function(chunck) {

// })