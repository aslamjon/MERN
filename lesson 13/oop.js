
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}
Elf.prototype.age = 30;
const elf1 = new Elf('Merlin', 'sword');

console.log(elf1.age);
// =========================================================================
console.log('==================================================================');
class Person {
    constructor(fname, lname, age, gender) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.gender = gender;
    }
    fullName() {
        return this.fname + ' ' + this.lname;
    }

    getAge() {
        return `${this.fullName()} ning yoshi ${this.age}`;
    }

    getGender() {
        return `${this.fullName()} ning jinsi ${this.gender}`;
    }

    get getGenderr() {
        return this.gender;
    }

    set setGender(g) {
        this.gender = g;
    }
}

const p1 = new Person("John", 'Elder', 30, 'male');
console.log(p1.fullName());
console.log(p1.getAge());
console.log(p1.getGender());
console.log(p1.getGenderr);
p1.setGender = 'female';
console.log(p1.getGenderr);

const p2 = new Person("Tim", "hok", 25, 'male');

class Animale {
    constructor(type, name, age, color) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.color = color;
    }

    get info() {
        return `bu ${this.name} nomli ${this.type} ning yoshi ${this.age}da va uning rangi ${this.color}`;
    }

}

const anim1 = new Animale('mushuk', 'kita', 5, 'qora');
console.log(anim1.info);