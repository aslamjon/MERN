let drogon = {
    name: 'Drogo',
    fire: true,
    attack() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `I'm ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name: 'Kiki',
    attack() {
        return 1
    }
}
/*
              Object
            /       \
        Function    Array
*/
// drago.sing.call(lizard);
lizard.__proto__ = drogon; // lizard ni otasini drogon ga tenglash
console.log(lizard.sing());
console.log(drogon.isPrototypeOf(lizard)); // drogon lizardning prototype mi?

for (const prop in lizard) {
    if (lizard.hasOwnProperty(prop)) { // faqat lizardning ichidagilarni topadi
        console.log(prop);
    }
}
//////////////////////////////////////////////////////
function Person(name,age) {
    this.name = name;
    this.age = age;
}

// Person Custrction Funciton ni ichida prototype degan object bor.
Person.prototype.country = 'Uz';
Person.prototype.getMessage = function () {
    return `My name is ${this.name} and I am ${this.age} years old`;
};

const person1 = new Person('John', 25);

console.log(Person.prototype);
console.log(person1.getMessage());

Date.prototype.lastYear = function() {
    return this.getFullYear() - 1;
};

const d = new Date();
console.log(d.lastYear());