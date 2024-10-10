import { Injectable } from '@angular/core';
import { Employee } from "../../Interface/employee";

@Injectable({
  providedIn: 'root',
})
export class EmployeeListService {
  employees: Employee[] = [];

  constructor() {}

  addEmployee(id: string, name: string, age: number, position: string, department: string): void {
    this.employees.push({ id, name, age, position, department });
  }

  getEmployees(): Employee[] {
    return this.employees;
  }

  removeEmployee(index: number): void {
    this.employees.splice(index, 1);
  }
}
