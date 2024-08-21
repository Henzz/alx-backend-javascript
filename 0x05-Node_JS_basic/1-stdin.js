const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const greetings = "Welcome to Holberton School, what is your name?";

console.log(greetings);
rl.question(``, (name) => {
  console.log(`Your name is: ${name}`);
  rl.close();
});
