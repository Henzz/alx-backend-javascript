process.stdout.write("Welcome to Holberton School, what is your name?");

process.stdin.on("readable", function () {
  var name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }
  process.exit(0);
});

process.on("end", () => {
  process.stdout.write("This important software is now closing");
  process.exit(0);
});

module.exports = {
  main: () => {
    // Entry point for testing
  },
};
