import { Injectable } from '@angular/core';
import { Product } from '../../Interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  private products: Product[] = [];

  constructor() {}

  addProduct(id: string, name: string, price: number, category: string, description: string): void {
    this.products.push({ id, name, price, category, description });
  }

  getProducts(): Product[] {
    return this.products;
  }

  removeProduct(index: number): void {
    this.products.splice(index, 1);
  }
}
