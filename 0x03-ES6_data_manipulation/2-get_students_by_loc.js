function getStudentsByLocation(students, city) {
    return students.filter(student => student.location === city);
  }
const students = getListStudents();
const studentsInSF = getStudentsByLocation(students, 'San Francisco');
console.log(studentsInSF);
