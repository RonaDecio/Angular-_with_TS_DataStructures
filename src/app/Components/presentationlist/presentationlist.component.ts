import { Component } from '@angular/core';

@Component({
  selector: 'app-presentationlist',
  templateUrl: './presentationlist.component.html',
  styleUrl: './presentationlist.component.css'
})
export class PresentationlistComponent {
  presentationTopics: string[] = [
    'Introduction to Angular',
    'Understanding TypeScript',
    'Data Structures in Angular',
    'Building Responsive Web Applications'
  ];
  topic: string = '';

  addPresentationTopic(): void {
    if (this.topic.trim()) {
      this.presentationTopics.push(this.topic.trim());
      this.topic = '';
    }
  }

  removePresentationTopic(index: number): void {
    this.presentationTopics.splice(index, 1);
  }
}
