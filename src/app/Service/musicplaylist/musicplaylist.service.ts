import { Injectable } from '@angular/core';
import {musicplay } from '../../Interface/musicplay'
@Injectable({
  providedIn: 'root',
})
export class MusicPlaylistService {
  private songs: musicplay[] = [];

  constructor() {}

  addSong(id: string, title: string, artist: string, duration: string): void {
    this.songs.push({
      id: id,
      title: title,
      artist: artist,
      duration: duration,
    });
  }

  getSongs(): musicplay[] {
    return this.songs;
  }

  removeSong(index: number): void {
    this.songs.splice(index, 1);
  }
}
