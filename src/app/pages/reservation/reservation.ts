
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  imports: [FormsModule],
  templateUrl: './reservation.html',
  styleUrl: './reservation.css'
})
export class Reservation {

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

  toggleMenu(itemName: string) {
    if (this.selectedMenu.includes(itemName)) {
      this.selectedMenu = this.selectedMenu.filter(
        item => item !== itemName
      );
    } else {
      this.selectedMenu.push(itemName);
    }
  }
  
selectedTable = '';

tables = [
  { number: '01', seats: 2, reserved: false },
  { number: '02', seats: 4, reserved: false },
  { number: '03', seats: 0, reserved: true },
  { number: '04', seats: 6, reserved: false }
];

selectTable(tableNumber: string) {
  this.selectedTable = tableNumber;
}


  confirmReservation() {
    console.log('Reservation Details:', {
      name: this.name,
      email: this.email,
      phone: this.phone,
      guests: this.guests,
      date: this.date,
      time: this.time,
      specialRequest: this.specialRequest,
      selectedMenu: this.selectedMenu
    });

    alert(
  `Reservation confirmed for ${this.name}!\n` +
  `Selected Table: ${this.selectedTable || 'Not selected'}`
);
  }
}
