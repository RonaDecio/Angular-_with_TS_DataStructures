import { Component } from '@angular/core';

@Component({
  selector: 'app-composerlist',
  templateUrl: './composerlist.component.html',
  styleUrl: './composerlist.component.css'
})
export class ComposerlistComponent {
  composers: string[] = ['Francisco Santiago', 'Antonio Molina', 'Nicanor Abelardo', 'Hilarion Rubio'];
  composer: string = '';

  addComposer(): void {
    if (this.composer.trim()) {
      this.composers.push(this.composer.trim());
      this.composer = '';
    }
  }

  removeComposer(index: number): void {
    this.composers.splice(index, 1);
  }
}
