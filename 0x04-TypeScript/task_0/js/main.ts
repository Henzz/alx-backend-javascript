interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Addis Ababa",
};

const student2: Student = {
  firstName: "Abebe",
  lastName: "Dawit",
  age: 32,
  location: "Hawassa",
};

// Array of students
const studentsList: Student[] = [student1, student2];

// Table of students
function renderTable() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const trHead = document.createElement("tr");
  const thFirstName = document.createElement("th");
  const thLastName = document.createElement("th");
  const thAge = document.createElement("th");
  const thLocation = document.createElement("th");

  thFirstName.textContent = "First Name";
  thLastName.textContent = "Last Name";
  thAge.textContent = "Age";
  thLocation.textContent = "Location";

  trHead.appendChild(thFirstName);
  trHead.appendChild(thLastName);
  trHead.appendChild(thAge);
  trHead.appendChild(thLocation);
  thead.appendChild(trHead);

  studentsList.forEach((student) => {
    const trBody = document.createElement("tr");
    const tdFirstName = document.createElement("td");
    const tdLastName = document.createElement("td");
    const tdAge = document.createElement("td");
    const tdLocation = document.createElement("td");

    tdFirstName.textContent = student.firstName;
    tdLastName.textContent = student.lastName;
    tdAge.textContent = student.age.toString();
    tdLocation.textContent = student.location;

    trBody.appendChild(tdFirstName);
    trBody.appendChild(tdLastName);
    trBody.appendChild(tdAge);
    trBody.appendChild(tdLocation);
    tbody.appendChild(trBody);
  });
}

renderTable();
