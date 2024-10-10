import { Component } from '@angular/core';

@Component({
  selector: 'app-podcastlist',
  templateUrl: './podcastlist.component.html',
  styleUrl: './podcastlist.component.css'
})
export class PodcastlistComponent {
  podcasts: string[] = ['Episode 1: Introduction to Programming', 'Episode 2: Angular Basics', 'Episode 3: Web Development Trends', 'Episode 4: Interview with a Developer'];
  podcast: string = '';

  addPodcast(): void {
    if (this.podcast.trim()) {
      this.podcasts.push(this.podcast.trim());
      this.podcast = '';
    }
  }

  removePodcast(index: number): void {
    this.podcasts.splice(index, 1);
  }
}
