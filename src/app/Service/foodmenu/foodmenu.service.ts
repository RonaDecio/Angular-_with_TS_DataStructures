import { Injectable } from '@angular/core';
import { FoodItem } from '../../Interface/fooditem';

@Injectable({
  providedIn: 'root',
})
export class FoodMenuService {
  private foodMenu: FoodItem[] = [];

  constructor() {}

  addFoodItem(id: string, name: string, description: string, price: number): void {
    this.foodMenu.push({
      id: id,
      name: name,
      description: description,
      price: price,
    });
  }

  getFoodItems(): FoodItem[] {
    return this.foodMenu;
  }

  removeFoodItem(index: number): void {
    this.foodMenu.splice(index, 1);
  }
}
