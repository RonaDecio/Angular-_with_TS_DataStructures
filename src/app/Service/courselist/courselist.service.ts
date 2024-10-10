import { Injectable } from '@angular/core';
import { Course } from '../../Interface/course';

@Injectable({
  providedIn: 'root',
})
export class CourseListService {
  courses: Course[] = [];

  constructor() {}

  addCourse(code: string, title: string, units: number): void {
    this.courses.push({ code, title, units });
  }

  getCourses(): Course[] {
    return this.courses;
  }

  removeCourse(index: number): void {
    this.courses.splice(index, 1);
  }
}

