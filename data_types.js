// Primitive Data Types

/*
+------------+---------------------------+----------------------------+
| Type       | Description               | Example                    |
+------------+---------------------------+----------------------------+
| string     | Text values               | "Hello World!"             |
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

let str = "Hello"; // string
let num = 42; // number
let bigNum = 1234567890123456789n; // bigint
let isFun = true; // boolean
let notDefined; // undefined
let emptyValue = null; // null
let uniqueId = Symbol("id");

console.log(str);
console.log(num);
console.log(bigNum);
console.log(isFun);
console.log(notDefined);
console.log(emptyValue);
console.log(uniqueId);

// Reference Data Types

/*
+------------+--------------------------------+------------------------------+
| Type       | Description                    | Example                      |
+------------+--------------------------------+------------------------------+
| Object     | Key-value pairs collection     | { name: "John", age: 25 }    |
+------------+--------------------------------+------------------------------+
| Array      | Ordered list of values         | [1, 2, 3, 4, 5]              |
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

let person = {
  name: "Alice",
  age: 30,
}; // object
let numbers = [10, 20, 30]; // array
let greet = function () {
  return "Hello!";
}; // function
let today = new Date(); // date
let pattern = /\d+/; // RegExp
let userMap = new Map(); // Map
userMap.set("id", 101);
let uniqueNumbers = new Set([1, 2, 3, 3, 4, 4, 5, 5]); // Set

console.log(person.name);
console.log(numbers[1]);
console.log(greet());
console.log(today.toDateString());
console.log(pattern.test("abc123"));
console.log(userMap);
console.log(uniqueNumbers);
