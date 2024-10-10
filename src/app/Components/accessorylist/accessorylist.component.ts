import { Component } from '@angular/core';

@Component({
  selector: 'app-accessorylist',
  templateUrl: './accessorylist.component.html',
  styleUrl: './accessorylist.component.css'
})
export class AccessorylistComponent {
  accessories: string[] = ['Phone Case', 'Screen Protector', 'Charger', 'Earphones'];
  accessory: string = '';

  addAccessory(): void {
    if (this.accessory.trim()) {
      this.accessories.push(this.accessory.trim());
      this.accessory = '';
    }
  }

  removeAccessory(index: number): void {
    this.accessories.splice(index, 1);
  }
}
