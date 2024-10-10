import { Component } from '@angular/core';
import { AnimalListService} from '../../Service/animallist/animallist.service';
import { Animal } from '../../interface/animal';

@Component({
  selector: 'app-animallist',
  templateUrl: './animallist.component.html',
  styleUrl: './animallist.component.css'
})
export class AnimallistComponent {
  animals: Animal[] = [];
  id: string = '';
  name: string = '';
  species: string = '';

  constructor(private animalListService: AnimalListService) {
    this.animals = this.animalListService.getAnimals();
  }

  addAnimal(): void {
    this.animalListService.addAnimal(this.id, this.name, this.species);
    this.id = '';
    this.name = '';
    this.species = '';
  }

  removeAnimal(index: number): void {
    this.animalListService.removeAnimal(index);
  }
}
