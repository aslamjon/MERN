// hometask
// animal (type, name, age) speek() {} 
// dog , cat , caw ...
//  har bir class da farqi bo'lsin
// 
// keingi dars = closure (boshqa lang da uchramaydigan narsalar)
// 
class Animal {
    constructor(type, name, age){
        this.type = type;
        this.name = name;
        this.age = age;
    }
    speek() {return `i'm ${this.type}. My name is ${this.name}`}
}

class Cat extends Animal {
    constructor(type, name, age, color) {
        super(type, name, age);
        this.color = color;
    }
    Scolor() {return `My color is ${this.color}`}
}


const cat = new Cat('cat', 'Kik', 4, 'white-balck');

console.log(cat);

