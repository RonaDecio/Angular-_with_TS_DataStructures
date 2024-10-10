import { Injectable } from '@angular/core';
import { Fruit } from '../../Interface/fruit';
@Injectable({
  providedIn: 'root',
})
export class FruitListService {
  fruits: Fruit[] = [];

  constructor() {}

  addFruit(name: string, color: string): void {
    this.fruits.push({ name, color });
  }

  getFruits(): Fruit[] {
    return this.fruits;
  }

  removeFruit(index: number): void {
    this.fruits.splice(index, 1);
  }
}
