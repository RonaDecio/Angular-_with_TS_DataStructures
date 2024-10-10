import { Injectable } from '@angular/core';
import { Sport } from '../../Interface/sport';

@Injectable({
  providedIn: 'root',
})
export class SportsListService {
  private sports: Sport[] = [];

  constructor() {}

  addSport(id: string, name: string): void {
    this.sports.push({ id, name });
  }

  getSports(): Sport[] {
    return this.sports;
  }

  removeSport(index: number): void {
    this.sports.splice(index, 1);
  }
}
