const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const greetings = "Welcome to Holberton School, what is your name?\n";

// console.log(greetings);
rl.question(greetings, (name) => {
  console.log(`Your name is: ${name}`);
  rl.close();
});

rl.on("close", () => {
  console.log("This important software is now closing");
});
