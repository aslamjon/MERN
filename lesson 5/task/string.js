str = `JavaScript runs on the client side of the web, which can be used to design /
program how the web pages behave on the occurrence of an event.
JavaScript is an easy to learn and also powerful scripting language, widely
used for controlling web page behavior`;
sum = str.indexOf("web") + str.indexOf("an") + str.indexOf("and");

sum2 = str.lastIndexOf("web") + str.lastIndexOf("an") + str.lastIndexOf("and");

console.log(`${str.indexOf("web")} + ${str.indexOf("an")} + ${str.indexOf("and")} = ${sum}
${str.lastIndexOf("web")} + ${str.lastIndexOf("an")} + ${str.lastIndexOf("and")} = ${sum2}`);