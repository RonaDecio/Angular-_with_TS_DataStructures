import { Component } from '@angular/core';
import {MusicPlaylistService} from '../../Service/musicplaylist/musicplaylist.service';
import {musicplay} from '../../Interface/musicplay';

@Component({
  selector: 'app-musicplaylist',
  templateUrl: './musicplaylist.component.html',
  styleUrl: './musicplaylist.component.css'
})
export class MusicplaylistComponent {
  songs: musicplay[] = [];
  id: string = '';
  title: string = '';
  artist: string = '';
  duration: string = '';

  constructor(private musicPlaylistService: MusicPlaylistService) {
    this.songs = this.musicPlaylistService.getSongs();
  }

  addSong(): void {
    this.musicPlaylistService.addSong(this.id, this.title, this.artist, this.duration);
    this.resetForm();
  }

  removeSong(index: number): void {
    this.musicPlaylistService.removeSong(index);
  }

  resetForm(): void {
    this.id = '';
    this.title = '';
    this.artist = '';
    this.duration = '';
  }
}
