import { Component } from '@angular/core';
import {SportsListService} from '../../Service/sportlist/sportlist.service';
import {Sport} from '../../Interface/sport';

@Component({
  selector: 'app-sportlist',
  templateUrl: './sportlist.component.html',
  styleUrl: './sportlist.component.css'
})
export class SportlistComponent {
  sports: Sport[] = [];
  id: string = '';
  name: string = '';

  constructor(private sportsListService: SportsListService) {
    this.sports = this.sportsListService.getSports();
  }

  addSport(): void {
    this.sportsListService.addSport(this.id, this.name);
    this.id = '';
    this.name = '';
  }

  removeSport(index: number): void {
    this.sportsListService.removeSport(index);
  }
}
