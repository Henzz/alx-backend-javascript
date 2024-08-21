process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', function () {
  var name = process.stdin.read();

  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }
  process.exit(0);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit(0);
});
