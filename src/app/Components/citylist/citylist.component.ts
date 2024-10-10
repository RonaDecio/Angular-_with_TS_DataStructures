import { Component } from '@angular/core';
import { CityListService } from '../../Service/citylist/citylist.service';
import { City } from '../../Interface/city';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrl: './citylist.component.css'
})
export class CitylistComponent {
  cities: City[] = [];
  name: string = '';
  country: string = '';
  population: number = 0;
  region: string = '';

  constructor(private cityListService: CityListService) {
    this.cities = this.cityListService.getCities();
  }

  addCity(): void {

    this.cityListService.addCity( this.name, this.country, this.population, this.region);
    this.clearForm();
  }

  removeCity(index: number): void {
    this.cityListService.removeCity(index);
  }

  private clearForm(): void {
    this.name = '';
    this.country = '';
    this.population = 0;
    this.region = '';
  }
}
