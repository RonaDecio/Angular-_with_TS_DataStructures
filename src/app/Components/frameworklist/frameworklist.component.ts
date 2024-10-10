import { Component } from '@angular/core';

@Component({
  selector: 'app-frameworklist',
  templateUrl: './frameworklist.component.html',
  styleUrl: './frameworklist.component.css'
})
export class FrameworklistComponent {
  frameworks: string[] = [
    'Angular',
    'React',
    'Vue.js',
    'Django'
  ];
  framework: string = '';

  addFramework(): void {
    if (this.framework.trim()) {
      this.frameworks.push(this.framework.trim());
      this.framework = '';
    }
  }

  removeFramework(index: number): void {
    this.frameworks.splice(index, 1);
  }
}
