import { Injectable } from '@angular/core';
import { Lecture } from '../../Interface/lecture';

@Injectable({
  providedIn: 'root',
})
export class LectureService {
  private lectures: Lecture[] = [];

  constructor() {}

  addLecture(id: string, title: string, date: string, time: string, duration: number): void {
    this.lectures.push({ id, title, date, time, duration });
  }

  getLectures(): Lecture[] {
    return this.lectures;
  }

  removeLecture(index: number): void {
    this.lectures.splice(index, 1);
  }
}
