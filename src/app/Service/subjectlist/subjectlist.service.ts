import { Injectable } from '@angular/core';
import { Subject } from '../../Interface/subject';

@Injectable({
  providedIn: 'root',
})
export class SubjectListService {
  private subjects: Subject[] = [];

  constructor() {}

  addSubject(id: string, name: string, description: string): void {
    this.subjects.push({ id, name, description});
  }

  getSubjects(): Subject[] {
    return this.subjects;
  }

  removeSubject(index: number): void {
    this.subjects.splice(index, 1);
  }
}
