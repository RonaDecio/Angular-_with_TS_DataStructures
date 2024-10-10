import { Component } from '@angular/core';
import {LanguageListService} from '../../Service/languagelist/languagelist.service';
import {Language} from '../../Interface/language';

@Component({
  selector: 'app-languagelist',
  templateUrl: './languagelist.component.html',
  styleUrl: './languagelist.component.css'
})
export class LanguagelistComponent {
  languages: Language[] = [];
  name: string = '';
  creator: string = '';
  year: number | null = null;

  constructor(private languageListService: LanguageListService) {
    this.languages = this.languageListService.getLanguages();
  }

  addLanguage(): void {
    if (this.name && this.creator && this.year) {
      this.languageListService.addLanguage(this.name, this.creator, this.year);
      this.name = '';
      this.creator = '';
      this.year = null;
    }
  }

  removeLanguage(index: number): void {
    this.languageListService.removeLanguage(index);
    this.languages = this.languageListService.getLanguages();
  }
}
