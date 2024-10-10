import { Component } from '@angular/core';

@Component({
  selector: 'app-laptoplist',
  templateUrl: './laptoplist.component.html',
  styleUrl: './laptoplist.component.css'
})
export class LaptoplistComponent {
  laptopItems: string[] = ['Dell XPS 13', 'MacBook Air', 'HP Spectre x360', 'Lenovo ThinkPad X1 Carbon'];
  laptop: string = '';

  addLaptop(): void {
    if (this.laptop.trim()) {
      this.laptopItems.push(this.laptop.trim());
      this.laptop = '';
    }
  }

  removeLaptop(index: number): void {
    this.laptopItems.splice(index, 1);
  }
}
