process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on("readable", function () {
  var name = process.stdin.read();
  if (name !== null) {
    console.log(`Your name is: ${name}`);
  }
  process.exit(0);
});

process.on("end", () => {
  console.log("This important software is now closing");
  process.exit(0);
});

module.exports = {
  main: () => {
    // Entry point for testing
  },
};
