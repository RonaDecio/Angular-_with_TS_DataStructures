import { Injectable } from '@angular/core';
import { Vegetable } from '../../Interface/vegetable';

@Injectable({
  providedIn: 'root',
})
export class VegetableListService {
  private vegetables: Vegetable[] = [];

  constructor() {}

  addVegetable(id: string, name: string, price: number): void {
    this.vegetables.push({ id, name, price });
  }

  getVegetables(): Vegetable[] {
    return this.vegetables;
  }

  removeVegetable(index: number): void {
    this.vegetables.splice(index, 1);
  }
}
