import { Component } from '@angular/core';
import { VegetableListService} from '../../Service/vegetablelist/vegetablelist.service';
import {Vegetable} from '../../Interface/vegetable';

@Component({
  selector: 'app-vegetablelist',
  templateUrl: './vegetablelist.component.html',
  styleUrl: './vegetablelist.component.css'
})
export class VegetablelistComponent {
  vegetables: Vegetable[] = [];
  id: string = '';
  name: string = '';
  price: number | null = null;

  constructor(private vegetableListService: VegetableListService) {
    this.vegetables = this.vegetableListService.getVegetables();
  }

  addVegetable(): void {
    if (this.price !== null) {
      this.vegetableListService.addVegetable(this.id, this.name, this.price);
      this.id = '';
      this.name = '';
      this.price = null;
    }
  }

  removeVegetable(index: number): void {
    this.vegetableListService.removeVegetable(index);
  }
}
