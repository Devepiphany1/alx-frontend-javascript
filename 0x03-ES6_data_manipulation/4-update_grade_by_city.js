function updateStudentGradeByCity(students, city, newGrades) {
    return students
      .filter(student => student.location === city) // Filter students by the specified city
      .map(student => {
        const gradeInfo = newGrades.find(grade => grade.studentId === student.id); // Find the grade by studentId
        return {
          ...student, // Spread the original student object
          grade: gradeInfo ? gradeInfo.grade : 'N/A' // Assign the grade or 'N/A' if not found
        };
      });
  }

const updatedStudents = updateStudentGradeByCity(students, 'San Francisco', newGrades);
console.log(updatedStudents);