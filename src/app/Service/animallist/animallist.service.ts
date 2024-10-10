import { Injectable } from '@angular/core';
import { Animal } from '../../interface/animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalListService {
  private animals: Animal[] = [];

  constructor() {}

  addAnimal(id: string, name: string, species: string): void {
    this.animals.push({ id, name, species });
  }

  getAnimals(): Animal[] {
    return this.animals;
  }

  removeAnimal(index: number): void {
    this.animals.splice(index, 1);
  }
}
