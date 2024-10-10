import { Component } from '@angular/core';
import {FruitListService} from '../../Service/fruitlist/fruitlist.service';
import {Fruit} from '../../Interface/fruit';

@Component({
  selector: 'app-fruitlist',
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.css'
})
export class FruitlistComponent {
  fruits: Fruit[] = [];
  name: string = '';
  color: string = '';

  constructor(private fruitListService: FruitListService) {
    this.fruits = this.fruitListService.getFruits();
  }

  addFruit(): void {
    if (!this.name || !this.color) {
      alert('Please provide both name and color.');
      return;
    }

    this.fruitListService.addFruit(this.name, this.color);

    this.name = '';
    this.color = '';
  }

  removeFruit(index: number): void {
    this.fruitListService.removeFruit(index);
  }
}
