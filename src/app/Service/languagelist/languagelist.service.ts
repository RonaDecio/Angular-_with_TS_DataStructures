import { Injectable } from '@angular/core';
import { Language } from '../../Interface/language';

@Injectable({
  providedIn: 'root',
})
export class LanguageListService {
  private languages: Language[] = [];

  constructor() {}

  addLanguage(name: string, creator: string, year: number): void {
    this.languages.push({ name, creator, year });
  }

  getLanguages(): Language[] {
    return this.languages;
  }

  removeLanguage(index: number): void {
    this.languages.splice(index, 1);
  }
}
