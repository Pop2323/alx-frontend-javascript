export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((el) => el.location === city)
    .map((student) => {
      const grades = newGrades.filter((el) => el.studentId === student.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...student,
        grade,
      };
    });
}
