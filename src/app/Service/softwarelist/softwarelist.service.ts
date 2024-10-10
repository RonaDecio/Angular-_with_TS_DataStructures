import { Injectable } from '@angular/core';
import { Software } from '../../Interface/software';

@Injectable({
  providedIn: 'root',
})
export class SoftwareListService {
  private softwareList: Software[] = [];

  constructor() {}

  addSoftware(name: string, version: string, license: string): void {
    this.softwareList.push({
      name: name,
      version: version,
      license: license,
    });
  }

  getSoftwareList(): Software[] {
    return this.softwareList;
  }

  removeSoftware(index: number): void {
    this.softwareList.splice(index, 1);
  }
}
