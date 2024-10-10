import { Injectable } from '@angular/core';
import { Country } from '../../Interface/country';

@Injectable({
  providedIn: 'root',
})
export class CountryListService {
  private countries: Country[] = [];

  constructor() {}

  addCountry(id: string, name: string, continent: string): void {
    this.countries.push({ id, name, continent });
  }

  getCountries(): Country[] {
    return this.countries;
  }

  removeCountry(index: number): void {
    this.countries.splice(index, 1);
  }
}
