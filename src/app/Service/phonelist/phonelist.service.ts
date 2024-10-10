import { Injectable } from '@angular/core';
import { Phone} from "../../Interface/phone";

@Injectable({
  providedIn: 'root',
})
export class PhoneListService {
  private contacts: Phone[] = [];

  constructor() {}

  addContact(id: string, name: string, phone: string, email: string): void {
    this.contacts.push({
      id: id,
      name: name,
      phone: phone,
      email: email,
    });
  }

  getContacts(): Phone[] {
    return this.contacts;
  }

  removeContact(index: number): void {
    this.contacts.splice(index, 1);
  }
}
