import { Component } from '@angular/core';
import { BookListService} from '../../Service/booklist/booklist.service';
import { Book } from '../../Interface/book';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent {
  books: Book[] = [];
  id: string = '';
  title: string = '';
  author: string = '';
  genre: string = '';
  year: number = 0;

  constructor(private bookListService: BookListService) {
    this.books = this.bookListService.getBooks();
  }

  addBook(): void {
    this.bookListService.addBook(this.id, this.title, this.author, this.genre, this.year);
    this.clearForm();
  }

  removeBook(index: number): void {
    this.bookListService.removeBook(index);
  }

  private clearForm(): void {
    this.id = '';
    this.title = '';
    this.author = '';
    this.genre = '';
    this.year = 0;
  }
}
