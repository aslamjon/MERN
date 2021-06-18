const fs = require('fs');

// fs.readFile('text.txt', 'utf8' , function(err, data) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data);
//     }
// })

const data = fs.readFileSync('text.txt', 'utf8'); // bu file ni bloklydi yani qachon malumot kelmasa boshqa qatorni o'qimaydi.

// console.log(data);
// console.log('Hello');

fs.writeFile('data.txt', 'Hello world', function(err) {
    if (err) console.log(err);
    else console.log("Data has been written successfully");
})

fs.appendFile('data.txt', 'This is MERN course', function(err) {
    if (err) console.log(err);
    else console.log("Data has been written successfully");
})

//  delete file
fs.unlink('data.txt', function(err){
    if (err) console.log(err);
    else console.log("File has been deleted");
})

fs.rename('text.txt', 'qqq.txt', function(err){
    if (err) console.log(err);
    else console.log("File has been renamed");
})