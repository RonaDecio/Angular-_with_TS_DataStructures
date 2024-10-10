import { Component } from '@angular/core';
import {LectureService} from '../../Service/lecturelist/lecturelist.service';
import {Lecture} from '../../Interface/lecture';

@Component({
  selector: 'app-lecturelist',
  templateUrl: './lecturelist.component.html',
  styleUrl: './lecturelist.component.css'
})
export class LecturelistComponent {
  lectures: Lecture[] = [];
  id: string = '';
  title: string = '';
  date: string = '';
  time: string = '';
  duration: number = 0;

  constructor(private lectureService: LectureService) {
    this.lectures = this.lectureService.getLectures();
  }

  addLecture(): void {
    this.lectureService.addLecture(this.id, this.title, this.date, this.time, this.duration);
    this.resetForm();
  }

  removeLecture(index: number): void {
    this.lectureService.removeLecture(index);
  }

  resetForm(): void {
    this.id = '';
    this.title = '';
    this.date = '';
    this.time = '';
    this.duration = 0;
  }
}
