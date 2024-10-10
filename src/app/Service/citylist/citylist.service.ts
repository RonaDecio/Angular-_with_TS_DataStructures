import { Injectable } from '@angular/core';
import { City } from '../../Interface/city';

@Injectable({
  providedIn: 'root',
})
export class CityListService {
  private cities: City[] = [];

  constructor() {}

  addCity( name: string, country: string, population: number, region: string): void {
    this.cities.push({name, country, population, region });
  }

  getCities(): City[] {
    return this.cities;
  }

  removeCity(index: number): void {
    this.cities.splice(index, 1);
  }
}
