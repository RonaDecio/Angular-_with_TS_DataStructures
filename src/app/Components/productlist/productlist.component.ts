import { Component } from '@angular/core';
import {ProductListService} from '../../Service/productlist/productlist.service';
import {Product} from '../../Interface/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  products: Product[] = [];
  id: string = '';
  name: string = '';
  price: number = 0;
  category: string = '';
  description: string = '';

  constructor(private productListService: ProductListService) {
    this.products = this.productListService.getProducts();
  }

  addProduct(): void {
    this.productListService.addProduct(this.id, this.name, this.price, this.category, this.description);
    this.resetForm();
  }

  removeProduct(index: number): void {
    this.productListService.removeProduct(index);
  }

  resetForm(): void {
    this.id = '';
    this.name = '';
    this.price = 0;
    this.category = '';
    this.description = '';
  }
}
