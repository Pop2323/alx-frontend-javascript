import getListStudents from './0-get_list_students';

export default function getStudentIdsSum(student = getListStudents()) {
   return std.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
