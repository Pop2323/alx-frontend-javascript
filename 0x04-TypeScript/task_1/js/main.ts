export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [index:string]: any;  
}

export const Directors: Teacher = {
    numberOfReports: number,
}

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}


export interface IStudentClassConstructor {
    new (firstName: string, lastName: string): IStudentClass;
}

export interface IStudentClass {
    workOnHomework(): string;
    displayName(): string;
}

export class StudentClass implements IStudentClass {
    this.__firstName = firstName;
    this.__lastName = lastName;
}

workOnHomework() {
    return 'Currently working';
}

displayName() {
    return this.__firstName;
}

export interface IStudentClassConstructor {char: IStudentClassConstructor, firstName: string, lastName: string}: IStudentClass {
    return new char(firstName, lastName);
}