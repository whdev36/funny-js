let age = 18;

if (age >= 18) {
  console.log("✅ You are an adult!");
} else {
  console.log("⛔ You are not an adult yet.");
}

// Multi-condition if-else
let grade = 85;

if (grade >= 90) {
  console.log("🎓 Excellent grade! (A)");
} else if (grade >= 75) {
  console.log("👍 Good grade! (B)");
} else if (grade >= 60) {
  console.log("🙂 Average grade! (C)");
} else {
  console.log("❌ Unfortunately, you failed. (F)");
}

// switch example
let day = "Saturday";

switch (day) {
  case "Monday":
    console.log("📚 Workday!");
    break;
  case "Tuesday":
    console.log("📖 Another workday.");
    break;
  case "Wednesday":
    console.log("📌 Midweek!");
    break;
  case "Thursday":
    console.log("🧐 Almost weekend!");
    break;
  case "Friday":
    console.log("🎉 Last workday!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("😎 Weekend!");
    break;
  default:
    console.log("❓ Invalid day.");
}

// Ternary operator
let weather = "sunny";
let goOutside =
  weather === "sunny" ? "🌞 Yes, let's go outside!" : "☔ No, staying indoors.";
console.log(goOutside);
