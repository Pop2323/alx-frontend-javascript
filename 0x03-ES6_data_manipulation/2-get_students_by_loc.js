import getListStudents from './0-get_list_students';

export default function getStudentsByLocation(std = getListStudents(), city) {
   return std.filter(el => el.location === city);
}
