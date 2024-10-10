import { Component } from '@angular/core';

@Component({
  selector: 'app-artistlist',
  templateUrl: './artistlist.component.html',
  styleUrl: './artistlist.component.css'
})
export class ArtistlistComponent {
  artists: string[] = ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'];
  artist: string = '';

  addArtist(): void {
    if (this.artist.trim()) {
      this.artists.push(this.artist.trim());
      this.artist = '';
    }
  }

  removeArtist(index: number): void {
    this.artists.splice(index, 1);
  }
}
