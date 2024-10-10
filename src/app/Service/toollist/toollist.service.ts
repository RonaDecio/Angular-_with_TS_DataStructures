import { Injectable } from '@angular/core';
import { Tool } from '../../Interface/tool';

@Injectable({
  providedIn: 'root',
})
export class ToolListService {
  private tools: Tool[] = [];

  constructor() {}

  addTool(id: string, name: string, description: string): void {
    this.tools.push({ id, name, description });
  }

  getTools(): Tool[] {
    return this.tools;
  }

  removeTool(index: number): void {
    this.tools.splice(index, 1);
  }
}
