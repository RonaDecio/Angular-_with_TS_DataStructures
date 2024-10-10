import { Component } from '@angular/core';
import {SubjectListService} from '../../Service/subjectlist/subjectlist.service';
import {Subject} from '../../Interface/subject'
@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrl: './subjectlist.component.css'
})
export class SubjectlistComponent {
  subjects: Subject[] = [];
  id: string = '';
  name: string = '';
  description: string = '';


  constructor(private subjectListService: SubjectListService) {
    this.subjects = this.subjectListService.getSubjects();
  }

  addSubject(): void {
    this.subjectListService.addSubject(this.id, this.name, this.description);
    this.id = '';
    this.name = '';
    this.description = '';

  }

  removeSubject(index: number): void {
    this.subjectListService.removeSubject(index);
  }
}
