console.log("----------------------------Ex.1-----------------------------------");
unknown = "Hi";
if (typeof unknown == 'string') console.log("Kiritilgan o’zgaruvchining tipi "+ "\x1b[1m" + "String" + "\x1b[0m");
else if  (typeof unknown == 'number') console.log("Kiritilgan o’zgaruvchining tipi "+ "\x1b[1m" + "Number" + "\x1b[0m");
else if  (typeof unknown == 'boolean') console.log("Kiritilgan o’zgaruvchining tipi "+ "\x1b[1m" + "boolean" + "\x1b[0m");

console.log("----------------------------Ex.2-----------------------------------");
// Compare numbers
num1 = 2;
num2 = 5;
if (num1 > num2) console.log("Eng katta son",num1);
else if (num1 == num2) console.log("ikkala son teng");
else console.log("Eng katta son",num2);

console.log("----------------------------Ex.3-----------------------------------");
// Multiplication of numbers
multiplication = 3 * 5 * 2;
if (multiplication > 0) console.log("Sonlarning ko'paytmasi Musbat");
else if (multiplication === 0) console.log("Sonlarning ko'paytmasi 0 ta teng");
else console.log("Sonlarning ko'paytmasi Manfiy");

console.log("----------------------------Ex.4-----------------------------------");
// I want to join a group called secret
age = 18;
gender = "M";
if (age > 18 && gender == "M") console.log("Siz guruhga a’zo bo’ldingiz");
else if (age > 18 && gender == "F") console.log("Siz imtihondan o’tishingiz talab qilinadi");
else if (age < 18 && gender == "M") console.log("Guruhga a’zo bo’lsih uchun belgilangan miqdorda pul to’lang");
else console.log("Siz guruhga a’zo bo’la olmaysiz");