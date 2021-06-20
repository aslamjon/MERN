let person = {
    name: 'John Doe',
    age: 30,
    gender: 'M',
    hobbies: ['Reading', 'Surfing', 'Playing']
}

// console.log(JSON.stringify(person));
console.log(JSON.stringify(person, null, 2)); // json ni chiroyli qilib beradi

let fs = require('fs');

reader = fs.createReadStream('data.txt');

reader.on('data', function (chunk) {
    console.log(chunk.toString());
})

// createReadStream - malumotlarni bo'laklarga(64 kb) ajratib ishlaydi 