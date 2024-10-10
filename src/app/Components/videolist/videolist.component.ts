import { Component } from '@angular/core';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrl: './videolist.component.css'
})
export class VideolistComponent {
  videos: string[] = ['Inception', 'The Dark Knight', 'Interstellar', 'The Matrix'];
  video: string = '';

  addVideo(): void {
    if (this.video.trim()) {
      this.videos.push(this.video.trim());
      this.video = '';
    }
  }

  removeVideo(index: number): void {
    this.videos.splice(index, 1);
  }
}
