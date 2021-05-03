console.log("----------------------------Ex.1-----------------------------------");
grade = Math.floor(Math.random() * 100);
if (grade >= 90) console.log("Sizning bahoyingiz A");
else if ((grade >= 80) && (grade  <= 89)) console.log("Sizning bahoyingiz B");
else if ((grade >= 70) && (grade  <= 79)) console.log("Sizning bahoyingiz C");
else if ((grade >= 60) && (grade  <= 69)) console.log("Sizning bahoyingiz D");
else console.log("Sizning bahoyingiz F");

console.log(grade, 'this is variable');