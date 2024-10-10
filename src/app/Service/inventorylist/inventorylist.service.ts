import { Injectable } from '@angular/core';
import { InventoryItem } from '../../Interface/inventory';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private items: InventoryItem[] = [];

  constructor() {}

  addItem(id: string, name: string, quantity: number, price: number): void {
    this.items.push({ id, name, quantity, price });
  }

  getItems(): InventoryItem[] {
    return this.items;
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }
}
