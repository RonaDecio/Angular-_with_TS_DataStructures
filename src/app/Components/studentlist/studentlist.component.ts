import { Component } from '@angular/core';
import {StudentListService} from '../../Service/studentlist/studentlist.service';
import {Student} from '../../Interface/student';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.css'
})
export class StudentlistComponent {
  constructor(private studentListService: StudentListService) {
    this.students = this.studentListService.getStudents();
  }

  students: Student[] = [];
  id: string = '';
  name: string = '';
  age: number = 0;
  section: string = '';
  grade: string = '';

  addStudent(): void {
    this.studentListService.addStudent(
      this.id,
      this.name,
      this.age,
      this.section,
      this.grade
    );

    this.id = '';
    this.name = '';
    this.age = 0;
    this.section = '';
    this.grade = '';
  }


  removeStudent(index: number): void {
    this.students.splice(index, 1);
  }
}
