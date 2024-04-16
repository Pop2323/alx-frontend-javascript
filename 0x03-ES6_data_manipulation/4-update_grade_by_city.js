export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((std) => std.location === city)
    .map((student) => {
      const grades = newGrades.filter((std) => std.studentId === student.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {...student, grade,};
    });
}
