import { Component } from '@angular/core';

@Component({
  selector: 'app-developertoolslist',
  templateUrl: './developertoolslist.component.html',
  styleUrl: './developertoolslist.component.css'
})
export class DevelopertoolslistComponent {
  tools: string[] = [
    'Visual Studio Code',
    'Git',
    'Node.js'
  ];
  tool: string = '';

  addTool(): void {
    if (this.tool.trim()) {
      this.tools.push(this.tool.trim());
      this.tool = '';
    }
  }

  removeTool(index: number): void {
    this.tools.splice(index, 1);
  }
}
