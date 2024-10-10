import { Injectable } from '@angular/core';
import { Book } from '../../Interface/book';

@Injectable({
  providedIn: 'root',
})
export class BookListService {
  private books: Book[] = [];

  constructor() {}

  addBook(id: string, title: string, author: string, genre: string, year: number): void {
    this.books.push({ id, title, author, genre, year });
  }

  getBooks(): Book[] {
    return this.books;
  }

  removeBook(index: number): void {
    this.books.splice(index, 1);
  }
}
