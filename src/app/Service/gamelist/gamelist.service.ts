import { Injectable } from '@angular/core';
import { Game } from '../../Interface/game';

@Injectable({
  providedIn: 'root',
})
export class GameListService {
  private games: Game[] = [];

  constructor() {}

  addGame(title: string, year: number): void {
    this.games.push({ title, year });
  }

  getGames(): Game[] {
    return this.games;
  }

  removeGame(index: number): void {
    this.games.splice(index, 1);
  }
}
