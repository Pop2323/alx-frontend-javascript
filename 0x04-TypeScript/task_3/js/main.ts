import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
    firstName: 'John',
    lastName: 'Doe',
}

const newRowID: RowID = CRUD.insertRow(row);
const updateRowID: rowElement = {...row, age: 30};

CRUD.updateRow(newRowID, updateRowID);
CRUD.deleteRow(newRowID);