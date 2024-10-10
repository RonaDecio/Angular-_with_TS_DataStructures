import { Injectable } from '@angular/core';
import { GroceryItem } from '../../Interface/groceryitem';

@Injectable({
  providedIn: 'root',
})
export class GroceryListService {
  private groceryItems: GroceryItem[] = [];

  constructor() {}

  addGroceryItem(id: string, name: string, quantity: number, category: string): void {
    this.groceryItems.push({
      id: id,
      name: name,
      quantity: quantity,
      category: category,
    });
  }

  getGroceryItems(): GroceryItem[] {
    return this.groceryItems;
  }

  removeGroceryItem(index: number): void {
    this.groceryItems.splice(index, 1);
  }
}
