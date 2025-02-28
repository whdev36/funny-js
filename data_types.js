// 🤓 Primitive Data Types - Explained with Humor 😆

/*
+------------+---------------------------+----------------------------+
| Type       | Description               | Example                    |
+------------+---------------------------+----------------------------+
| string     | Text values               | "I love JavaScript! ❤️"    |
+------------+---------------------------+----------------------------+
| number     | Numbers (integer & float) | 42, 3.14, -10              |
+------------+---------------------------+----------------------------+
| bigint     | Large integers            | 9007199254740991n          |
+------------+---------------------------+----------------------------+
| boolean    | True or False values      | true, false                |
+------------+---------------------------+----------------------------+
| undefined  | Uninitialized variable    | let x; (default undefined) |
+------------+---------------------------+----------------------------+
| null       | Empty or unknown value    | let y = null;              |
+------------+---------------------------+----------------------------+
| symbol     | Unique identifiers        | Symbol("id")               |
+------------+---------------------------+----------------------------+
*/

let message = "I love JavaScript! ❤️"; // string
let luckyNumber = 42; // number
let hugeNumber = 1234567890123456789n; // bigint
let isJavaScriptFun = true; // boolean
let unknownValue; // undefined
let nothingHere = null; // null
// let uniqueKey = Symbol("🔥 Unique Symbol 🔥");

console.log(`📢 Message: ${message}`);
console.log(`🎲 Lucky Number: ${luckyNumber}`);
console.log(`🦾 Huge Number: ${hugeNumber}`);
console.log(`😂 Is JavaScript Fun? ${isJavaScriptFun}`);
console.log(`🕵️‍♂️ Undefined Value: ${unknownValue}`);
console.log(`🚫 Null Value: ${nothingHere}`);
// console.log(`🔑 Unique Symbol Key: ${uniqueKey}`);

// 🤯 Reference Data Types - More Madness! 🎭

/*
+------------+--------------------------------+------------------------------+
| Type       | Description                    | Example                      |
+------------+--------------------------------+------------------------------+
| Object     | Key-value pairs collection     | { name: "John", age: 25 }    |
+------------+--------------------------------+------------------------------+
| Array      | Ordered list of values         | ["🍕", "🍔", "🌭"]           |
+------------+--------------------------------+------------------------------+
| Function   | Reusable block of code         | function() { return "Hi!" }  |
+------------+--------------------------------+------------------------------+
| Date       | Stores date and time           | new Date()                   |
+------------+--------------------------------+------------------------------+
| RegExp     | Pattern matching (RegularExp)  | /\d+/                        |
+------------+--------------------------------+------------------------------+
| Map        | Key-value pairs (unique keys)  | new Map()                    |
+------------+--------------------------------+------------------------------+
| Set        | Collection of unique values    | new Set([1, 2, 3])           |
+------------+--------------------------------+------------------------------+
*/

let human = {
  name: "Bob",
  age: 30,
  favoriteFood: "🍕",
}; // object

let favoriteFoods = ["🍕", "🍔", "🌭", "🍟", "🍩"]; // array

let tellJoke = function () {
  return "Why did the JavaScript developer go broke? Because he used VAR instead of LET! 😂";
}; // function

let currentDate = new Date(); // date

let regexPattern = /\d+/; // RegExp

let userDetails = new Map(); // Map
userDetails.set("username", "CoolHacker007");
userDetails.set("rank", "🔥 JavaScript Master");

let uniqueNumbers = new Set([1, 2, 3, 3, 4, 4, 5, 5]); // Set

console.log(`👨‍🎤 My name is ${human.name}, and I love ${human.favoriteFood}!`);
console.log(`🍽 Favorite Foods: ${favoriteFoods.join(", ")}`);
console.log(`😂 ${tellJoke()}`);
console.log(`📆 Today's Date: ${currentDate.toDateString()}`);
console.log(`🔍 'abc123' contains a number? ${regexPattern.test("abc123")}`);
console.log(`🗺 User Details:`, userDetails);
console.log(`🔢 Unique Numbers Set:`, uniqueNumbers);
