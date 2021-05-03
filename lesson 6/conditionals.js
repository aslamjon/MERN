// Comparisons
a = 5
// console.log(a === "5");
b = 8
// console.log(b > 4);
// console.log(b < 4);

// c = "JavaScript";
// console.log(c === "JavaScript");

// IF condition
age = 10;

if (age > 18) {
    console.log("Yoshingiz 18 dan katta");
} else if (age === 18) {
    console.log("Yoshingiz 18 da");
} else {
    console.log("Yoshingiz 18 dan kichkina");
}

grade = 60;
if (grade > 80) console.log("baho 5");
else if (grade === 80) console.log("baho 4");
else console.log("baho 3");

greeting = undefined;
time = new Date().getHours();
if (time < 10) greeting = "Good morning";
else if (time < 20) greeting = "Good day";
else greeting = "good evening";
console.log(greeting);


age = 10;
massage = (age > 18) 