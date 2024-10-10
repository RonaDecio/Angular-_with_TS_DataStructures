import { Component } from '@angular/core';

@Component({
  selector: 'app-flowerlist',
  templateUrl: './flowerlist.component.html',
  styleUrl: './flowerlist.component.css'
})
export class FlowerlistComponent {
  flowerItems: string[] = ['Roses', 'Lilies', 'Tulips', 'Peonies'];
  flower: string = '';

  addFlower(): void {
    if (this.flower.trim()) {
      this.flowerItems.push(this.flower.trim());
      this.flower = '';
    }
  }

  removeFlower(index: number): void {
    this.flowerItems.splice(index, 1);
  }
}
