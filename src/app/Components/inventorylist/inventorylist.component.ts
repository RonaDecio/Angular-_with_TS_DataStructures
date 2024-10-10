import { Component } from '@angular/core';
import {InventoryService} from '../../Service/inventorylist/inventorylist.service';
import {InventoryItem} from '../../Interface/inventory';

@Component({
  selector: 'app-inventorylist',
  templateUrl: './inventorylist.component.html',
  styleUrl: './inventorylist.component.css'
})
export class InventorylistComponent {
  items: InventoryItem[] = [];
  id: string = '';
  name: string = '';
  quantity: number = 0;
  price: number = 0;

  constructor(private inventoryService: InventoryService) {
    this.items = this.inventoryService.getItems();
  }

  addItem(): void {
    this.inventoryService.addItem(this.id, this.name, this.quantity, this.price);
    this.resetForm();
  }

  removeItem(index: number): void {
    this.inventoryService.removeItem(index);
  }

  resetForm(): void {
    this.id = '';
    this.name = '';
    this.quantity = 0;
    this.price = 0;
  }
}
