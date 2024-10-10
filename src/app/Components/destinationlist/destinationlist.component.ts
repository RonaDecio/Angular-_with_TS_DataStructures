import { Component } from '@angular/core';

@Component({
  selector: 'app-destinationlist',
  templateUrl: './destinationlist.component.html',
  styleUrl: './destinationlist.component.css'
})
export class DestinationlistComponent {
  destinationItems: string[] = ['Boracay', 'Palawan', 'Cebu', 'Batanes'];
  destination: string = '';

  addDestination(): void {
    if (this.destination.trim()) {
      this.destinationItems.push(this.destination.trim());
      this.destination = '';
    }
  }

  removeDestination(index: number): void {
    this.destinationItems.splice(index, 1);
  }
}
