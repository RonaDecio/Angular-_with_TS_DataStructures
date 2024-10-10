import { Component } from '@angular/core';
import {PhoneListService} from '../../Service/phonelist/phonelist.service';
import {Phone} from '../../Interface/phone';

@Component({
  selector: 'app-phonelist',
  templateUrl: './phonelist.component.html',
  styleUrl: './phonelist.component.css'
})
export class PhonelistComponent {
  contacts: Phone[] = [];
  id: string = '';
  name: string = '';
  phone: string = '';
  email: string = '';

  constructor(private phoneListService: PhoneListService) {
    this.contacts = this.phoneListService.getContacts();
  }

  addContact(): void {
    this.phoneListService.addContact(this.id, this.name, this.phone, this.email);
    this.resetForm();
  }

  removeContact(index: number): void {
    this.phoneListService.removeContact(index);
  }

  resetForm(): void {
    this.id = '';
    this.name = '';
    this.phone = '';
    this.email = '';
  }
}
