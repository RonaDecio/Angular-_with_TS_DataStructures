import { Component } from '@angular/core';
import {EmployeeListService} from '../../Service/employeelist/employeelist.service';
import {Employee} from '../../Interface/employee';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
  employees: Employee[] = [];
  id: string = '';
  name: string = '';
  age: number = 0;
  position: string = '';
  department: string = '';

  constructor(private employeeListService: EmployeeListService) {
    this.employees = this.employeeListService.getEmployees();
  }

  addEmployee(): void {
    if (!this.id || !this.name || this.age <= 0 || !this.position || !this.department) {
      alert('Please fill out all fields.');
      return;
    }

    this.employeeListService.addEmployee(
      this.id,
      this.name,
      this.age,
      this.position,
      this.department
    );

    this.id = '';
    this.name = '';
    this.age = 0;
    this.position = '';
    this.department = '';
  }

  removeEmployee(index: number): void {
    this.employeeListService.removeEmployee(index);
  }
}
