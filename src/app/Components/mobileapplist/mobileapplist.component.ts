import { Component } from '@angular/core';

@Component({
  selector: 'app-mobileapplist',
  templateUrl: './mobileapplist.component.html',
  styleUrl: './mobileapplist.component.css'
})
export class MobileapplistComponent {
  apps: string[] = ['Google', 'Facebook', 'Instagram', 'YouTube'];
  app: string = '';

  addApp(): void {
    if (this.app.trim()) {
      this.apps.push(this.app.trim());
      this.app = '';
    }
  }

  removeApp(index: number): void {
    this.apps.splice(index, 1);
  }
}
