import { Component } from '@angular/core';

@Component({
  selector: 'app-tourlist',
  templateUrl: './tourlist.component.html',
  styleUrl: './tourlist.component.css'
})
export class TourlistComponent {
  tourDates: string[] = [
    'December 10, 2024 - Manila, Philippines',
    'December 15, 2024 - Cebu, Philippines',
    'December 20, 2024 - Davao, Philippines',
    'December 25, 2024 - Iloilo, Philippines'
  ];
  date: string = '';

  addTourDate(): void {
    if (this.date.trim()) {
      this.tourDates.push(this.date.trim());
      this.date = '';
    }
  }

  removeTourDate(index: number): void {
    this.tourDates.splice(index, 1);
  }
}
