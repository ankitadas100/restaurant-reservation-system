
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableSelection } from '../../services/table-selection';

@Component({
  selector: 'app-reservation',
  imports: [FormsModule],
  templateUrl: './reservation.html',
  styleUrl: './reservation.css'
})
export class Reservation {

  constructor(private tableSelection: TableSelection) {}

  name = '';
  email = '';
  phone = '';
  guests = 1;
  date = '';
  time = '';
  specialRequest = '';

  selectedMenu: string[] = [];

  menuItems = [
    { name: 'Paneer Tikka', price: 220 },
    { name: 'Butter Chicken', price: 320 },
    { name: 'Biryani', price: 250 },
    { name: 'Gulab Jamun', price: 100 }
  ];

  // Get the table selected on the separate Tables page
  get selectedTable(): string {
    return this.tableSelection.selectedTable;
  }

  // Select or deselect menu items
  toggleMenu(itemName: string) {
    if (this.selectedMenu.includes(itemName)) {
      this.selectedMenu = this.selectedMenu.filter(
        item => item !== itemName
      );
    } else {
      this.selectedMenu.push(itemName);
    }
  }

  // Confirm reservation
  confirmReservation() {

    const reservationDetails = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      guests: this.guests,
      date: this.date,
      time: this.time,
      specialRequest: this.specialRequest,
      selectedMenu: this.selectedMenu,
      selectedTable: this.selectedTable
    };

    console.log('Reservation Details:', reservationDetails);

    alert(
      `Reservation confirmed for ${this.name}!\n` +
      `Selected Table: ${this.selectedTable || 'Not selected'}`
    );
  }

}
