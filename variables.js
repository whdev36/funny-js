let age = Math.floor(Math.random() * 10) + 18;
let gpa = (Math.random() * 2 + 2).toFixed(2);

let firstName = "John";
let lastName = "Doe";

console.log(
  `🎉 Hey! I'm ${firstName} ${lastName}, but you can call me "The Coder"!`
);
console.log(`📅 I'm ${age} years old, but my soul is 100 years old... 🧓`);
console.log(`📚 My GPA is ${gpa}. (Just ignore the failed subjects... 😅)`);

const drinks = ["☕ Coffee", "🍹 Mojito", "🥤 Soda", "🍵 Green Tea"];
const drink = drinks[Math.floor(Math.random() * drinks.length)];
const price = (Math.random() * 5 + 1).toFixed(2);

console.log(`🍻 My favorite drink is ${drink}`);
console.log(`💰 ${drink} costs $${price}. That's almost my whole wallet! 😂`);

const fruits = ["🍇 Grapes", "🍉 Watermelon", "🍎 Apple", "🍌 Banana"];
const fruit = fruits[Math.floor(Math.random() * fruits.length)];

console.log(`🧐 You know what? I also love ${fruit}!`);
console.log(
  `🤖 Beep boop... This was a funny JS introduction. See you later, alligator! 🐊`
);
