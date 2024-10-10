import { Component } from '@angular/core';
import { CarModelService} from '../../Service/carmodellist/carmodellist.service';
import { CarModel} from '../../Interface/carmodel';

@Component({
  selector: 'app-carmodellist',
  templateUrl: './carmodellist.component.html',
  styleUrl: './carmodellist.component.css'
})
export class CarmodellistComponent {
  carModels: CarModel[] = [];
  id: string = '';
  name: string = '';
  brand: string = '';
  year: number = 0;
  price: number = 0;

  constructor(private carModelService: CarModelService) {
    this.carModels = this.carModelService.getCarModels();
  }

  addCarModel(): void {
    this.carModelService.addCarModel(this.id, this.name, this.brand, this.year, this.price);
    this.clearForm();
  }

  removeCarModel(index: number): void {
    this.carModelService.removeCarModel(index);
  }

  private clearForm(): void {
    this.id = '';
    this.name = '';
    this.brand = '';
    this.year = 0;
    this.price = 0;
  }
}
