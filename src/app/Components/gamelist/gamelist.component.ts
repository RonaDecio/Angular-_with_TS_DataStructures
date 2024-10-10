import { Component } from '@angular/core';
import {GameListService} from '../../Service/gamelist/gamelist.service';
import {Game} from '../../Interface/game';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrl: './gamelist.component.css'
})
export class GamelistComponent {
  games: Game[] = [];
  title: string = '';
  year: number = 0;

  constructor(private gameListService: GameListService) {
    this.games = this.gameListService.getGames();
  }

  addGame(): void {
    this.gameListService.addGame(this.title, this.year);
    this.title = '';
    this.year = 0;
  }

  removeGame(index: number): void {
    this.gameListService.removeGame(index);
  }
}
