import { Injectable } from '@angular/core';
import { CarModel } from '../../Interface/carmodel';

@Injectable({
  providedIn: 'root',
})
export class CarModelService {
  private carModels: CarModel[] = [];

  constructor() {}

  addCarModel(id: string, name: string, brand: string, year: number, price: number): void {
    this.carModels.push({ id, name, brand, year, price });
  }

  getCarModels(): CarModel[] {
    return this.carModels;
  }

  removeCarModel(index: number): void {
    this.carModels.splice(index, 1);
  }
}

export class CarModelListService {
}
