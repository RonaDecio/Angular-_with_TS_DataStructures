import { Component } from '@angular/core';

@Component({
  selector: 'app-budgetlist',
  templateUrl: './budgetlist.component.html',
  styleUrl: './budgetlist.component.css'
})
export class BudgetlistComponent {
  budgetItems: { name: string; amount: number }[] = [
    { name: 'Marketing', amount: 10000 },
    { name: 'Development', amount: 50000 },
    { name: 'Design', amount: 20000 }
  ];
  itemName: string = '';
  itemAmount: number | null = null;

  addBudgetItem(): void {
    if (this.itemName.trim() && this.itemAmount !== null) {
      this.budgetItems.push({ name: this.itemName.trim(), amount: this.itemAmount });
      this.itemName = '';
      this.itemAmount = null;
    }
  }

  removeBudgetItem(index: number): void {
    this.budgetItems.splice(index, 1);
  }
}
