import { Component } from '@angular/core';

@Component({
  selector: 'app-tvshowlist',
  templateUrl: './tvshowlist.component.html',
  styleUrl: './tvshowlist.component.css'
})
export class TvshowlistComponent {
  shows: string[] = ['The World at War', 'Game of Thrones', 'Stranger Things', 'The Crown'];
  show: string = '';

  addShow(): void {
    if (this.show.trim()) {
      this.shows.push(this.show.trim());
      this.show = '';
    }
  }

  removeShow(index: number): void {
    this.shows.splice(index, 1);
  }
}
