interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 21,
    location: 'New York'
}
const student2: Student = {
    firstName: 'Jane',
    lastName: 'Adam',
    age: 22,
    location: 'New York'
}

const studentsList: Array<Student> = [
    student1,
    student2
]

export const renderTable = (studentsList: Array<Student>): void => {
    const table = document.createElement('table');
    const headRow = document.createElement('tr');
    table.appendChild(headRow);

    headRow.insertAdjacentHTML('beforeend', `<th>FIRST NAME</th>`);
    headRow.insertAdjacentHTML('beforeend', `<th>LAST NAME</th>`);

    for (const std of studentsList) {
        const stdRow = document.createElement('tr');
        table.appendChild(stdRow);

        stdRow.insertAdjacentHTML('beforeend', `<td>${std.firstName}</td>`);
        stdRow.insertAdjacentHTML('beforeend', `<td>${std.lastName}</td>`);
    }

    document.body.appendChild(table);
}