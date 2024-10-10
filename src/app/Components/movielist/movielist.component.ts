import { Component } from '@angular/core';
import {MovieListService} from '../../Service/movielist/movielist.service';
import {Movie} from '../../Interface/movie';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent {
  movies: Movie[] = [];
  id: string = '';
  title: string = '';
  genre: string = '';
  duration: number = 0;
  director: string = '';

  constructor(private movieListService: MovieListService) {
    this.movies = this.movieListService.getMovies();
  }

  addMovie(): void {
    this.movieListService.addMovie(this.id, this.title, this.genre, this.duration, this.director);
    this.clearForm();
  }

  removeMovie(index: number): void {
    this.movieListService.removeMovie(index);
  }

  private clearForm(): void {
    this.id = '';
    this.title = '';
    this.genre = '';
    this.duration = 0;
    this.director = '';
  }
}
