import { Injectable } from '@angular/core';
import { classroom } from '../../Interface/classroom';

@Injectable({
  providedIn: 'root',
})
export class ClassroomListService {
  private students: classroom[] = [];

  constructor() {}

  addStudent(id: string, name: string, age: number, section: string, grade: string): void {
    this.students.push({
      id: id,
      name: name,
      age: age,
      section: section,
      grade: grade,
    });
  }

  getStudents(): classroom[] {
    return this.students;
  }

  removeStudent(index: number): void {
    this.students.splice(index, 1);
  }
}
