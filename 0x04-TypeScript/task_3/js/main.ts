/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "../interface";
import * as CRUD from "./crud";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`CRUD.insertRow(${JSON.stringify(row)})`);
// Output: Insert row {"firstName":"Guillaume","lastName":"Salva"}

const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`CRUD.updateRow(${newRowID}, ${JSON.stringify(updatedRow)})`);
// Output: Update row 125 {"firstName":"Guillaume","lastName":"Salva","age":23}

CRUD.deleteRow(newRowID);
console.log(`CRUD.deleteRow(${newRowID})`);
// Output: Delete row id 125
