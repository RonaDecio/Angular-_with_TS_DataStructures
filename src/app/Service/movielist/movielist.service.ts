import { Injectable } from '@angular/core';
import { Movie } from '../../Interface/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieListService {
  private movies: Movie[] = [];

  constructor() {}

  addMovie(id: string, title: string, genre: string, duration: number, director: string): void {
    this.movies.push({ id, title, genre, duration, director });
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  removeMovie(index: number): void {
    this.movies.splice(index, 1);
  }
}
