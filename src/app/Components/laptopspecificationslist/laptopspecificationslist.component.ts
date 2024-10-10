import { Component } from '@angular/core';

@Component({
  selector: 'app-laptopspecificationslist',
  templateUrl: './laptopspecificationslist.component.html',
  styleUrl: './laptopspecificationslist.component.css'
})
export class LaptopspecificationslistComponent {
  specifications: { model: string; specs: string }[] = [
    { model: 'Dell XPS 13', specs: 'Intel Core i7, 16GB RAM, 512GB SSD' },
    { model: 'MacBook Air', specs: 'Apple M1, 8GB RAM, 256GB SSD' },
    { model: 'HP Spectre x360', specs: 'Intel Core i5, 8GB RAM, 256GB SSD' },
    { model: 'Lenovo ThinkPad X1 Carbon', specs: 'Intel Core i7, 16GB RAM, 1TB SSD' }
  ];
  model: string = '';
  specs: string = '';

  addSpecification(): void {
    if (this.model.trim() && this.specs.trim()) {
      this.specifications.push({ model: this.model.trim(), specs: this.specs.trim() });
      this.model = '';
      this.specs = '';
    }
  }

  removeSpecification(index: number): void {
    this.specifications.splice(index, 1);
  }
}
