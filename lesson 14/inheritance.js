class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    
    attack() {
        return `Attacks with ${this.weapon}`;
    }
}

class Elf extends Character {
    constructor(name, weapon) {
        super(name, weapon)
    }
}

const fiona = new Elf('Fiona', 'sword');

class Ogre extends Character { // voris olish
    constructor(name, weapon, type) {
        super(name, weapon); // otasini constructor ichidagilarni chaqiradi
        this.type = type;
    }
}

const shrek = new Ogre('Shrek', 'axe', 'green');

console.log(shrek);

class Cat extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
}
const cat = new Cat('Tom', 'age', 'white');
console.log(cat);


// hometask
// animal (type, name, age) speek() {} 
// dog , cat , caw ...
//  har bir class da farqi bo'lsin
// 
// keingi dars = closure (boshqa lang da uchramaydigan narsalar)
// 