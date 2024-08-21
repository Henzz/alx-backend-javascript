const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const data = fs.readFileSync(path, 'utf-8');
  const students = data.toString('utf-8').trim().split('\r\n').slice(1);
  const fields = {};

  for (const student of students) {
    if (student.trim() !== '') {
      const [firstName, lastName, age, field] = student.split(',');
      if (fields[field]) {
        fields[field].push(firstName);
      } else {
        fields[field] = [firstName];
      }
    }
  }

  console.log(`Number of students: ${students.length}`);

  for (const field in fields) {
    console.log(
      `Number of students in ${field}: ${fields[field].length}. List: ${fields[
        field
      ].join(', ')}`
    );
  }
};

module.exports = countStudents;
