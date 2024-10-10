import { Injectable } from '@angular/core';
import {Student} from "../../Interface/student";

@Injectable({
  providedIn: 'root',
})
export class StudentListService {
  students: Student[] = [];

  constructor() {}

  addStudent(id: string, name: string,  age: number, section: string,  grade: string,): void {
    this.students.push({
      id: id,
      name: name,
      age: age,
      section: section,
      grade: grade,

    });
  }

  getStudents(): Student[] {
    return this.students;
  }
}
