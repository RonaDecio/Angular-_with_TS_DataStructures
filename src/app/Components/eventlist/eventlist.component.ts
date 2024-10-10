import { Component } from '@angular/core';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrl: './eventlist.component.css'
})
export class EventlistComponent {
  events: string[] = [
    'Science Fair - October 15, 2024',
    'Sports Day - October 22, 2024',
    'Annual School Play - November 5, 2024',
    'Thanksgiving Celebration - November 20, 2024'
  ];
  event: string = '';

  addEvent(): void {
    if (this.event.trim()) {
      this.events.push(this.event.trim());
      this.event = '';
    }
  }

  removeEvent(index: number): void {
    this.events.splice(index, 1);
  }
}

