export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const cpp: Subjects.React = new Subjects.React();
export const cpp: Subjects.Java = new Subjects.Java();
export const cTeacher: Subjects.Teacher = {
    firstName: 'Guillaume',
    lastName: 'Salva'
    experienceTeachingC: 10,
};

console.log('C++');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('React');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());