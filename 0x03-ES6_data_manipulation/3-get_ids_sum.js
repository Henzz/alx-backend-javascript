function getStudentIdsSum(listOfStudents) {
  return listOfStudents.reduce((sum, student) => sum + student.id, 0);
}

export default getStudentIdsSum;
