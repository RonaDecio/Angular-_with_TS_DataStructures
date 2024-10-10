import { Component } from '@angular/core';
import { ClassroomListService} from '../../Service/classroomlist/classroomlist.service';
import {classroom} from '../../Interface/classroom';

@Component({
  selector: 'app-classroomlist',
  templateUrl: './classroomlist.component.html',
  styleUrl: './classroomlist.component.css'
})
export class ClassroomlistComponent {
  students: classroom[] = [];
  id: string = '';
  name: string = '';
  age: number = 0;
  section: string = '';
  grade: string = '';

  constructor(private classroomListService: ClassroomListService) {
    this.students = this.classroomListService.getStudents();
  }

  addStudent(): void {
    this.classroomListService.addStudent(this.id, this.name, this.age, this.section, this.grade);
    this.resetForm();
  }

  removeStudent(index: number): void {
    this.classroomListService.removeStudent(index);
  }

  resetForm(): void {
    this.id = '';
    this.name = '';
    this.age = 0;
    this.section = '';
    this.grade = '';
  }
}
