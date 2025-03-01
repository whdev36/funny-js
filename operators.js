let a = 10,
  b = 3;

console.log(`➕ Addition: ${a} + ${b} = ${a + b}`);
console.log(`➖ Subtraction: ${a} - ${b} = ${a - b}`);
console.log(`✖ Multiplication: ${a} * ${b} = ${a * b}`);
console.log(`➗ Division: ${a} / ${b} = ${a / b}`);
console.log(`🔢 Modulus: ${a} % ${b} = ${a % b}`);
console.log(`💥 Exponent: ${a} ** ${b} = ${a ** b}`);

let x = 5;
console.log(`🆙 Increment: ${x++} → ${x}`);
console.log(`🔽 Decrement: ${x--} → ${x}`);


let num1 = 5, num2 = "5";

console.log(`💡 Is 5 == "5" (loose)? → ${num1 == num2}`); 
console.log(`🔍 Is 5 === "5" (strict)? → ${num1 === num2}`);
console.log(`🚫 Is 5 != "5" (loose)? → ${num1 != num2}`);
console.log(`💣 Is 5 !== "5" (strict)? → ${num1 !== num2}`);
console.log(`🚀 Is 10 > 5? → ${10 > 5}`);
console.log(`⏳ Is 3 < 5? → ${3 < 5}`);
console.log(`📏 Is 10 >= 10? → ${10 >= 10}`);
console.log(`📝 Is 4 <= 6? → ${4 <= 6}`);

let isSunny = true, hasUmbrella = false;

console.log(`🌞☂️ Should I go outside? → ${isSunny && !hasUmbrella}`);
console.log(`🛑 Can I still go? → ${isSunny || hasUmbrella}`);
console.log(`🕵️‍♂️ Is it NOT sunny? → ${!isSunny}`);

