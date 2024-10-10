import { Component } from '@angular/core';

@Component({
  selector: 'app-librarylist',
  templateUrl: './librarylist.component.html',
  styleUrl: './librarylist.component.css'
})
export class LibrarylistComponent {
  libraries: string[] = [
    'RxJS',
    'NgRx',
    'Bootstrap',
    'Moment.js'
  ];
  library: string = '';

  addLibrary(): void {
    if (this.library.trim()) {
      this.libraries.push(this.library.trim());
      this.library = '';
    }
  }

  removeLibrary(index: number): void {
    this.libraries.splice(index, 1);
  }
}
