
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TableSelection } from '../../services/table-selection';

@Component({
  selector: 'app-reservation',
  imports: [FormsModule, RouterLink],
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

  get selectedTable(): string {
    return this.tableSelection.selectedTable;
  }

  toggleMenu(itemName: string) {
    if (this.selectedMenu.includes(itemName)) {
      this.selectedMenu = this.selectedMenu.filter(
        item => item !== itemName
      );
    } else {
      this.selectedMenu.push(itemName);
    }
  }

  saveReservation(reservation: object) {
    const savedReservations = JSON.parse(
      localStorage.getItem('reservations') || '[]'
    );

    savedReservations.push(reservation);

    localStorage.setItem(
      'reservations',
      JSON.stringify(savedReservations)
    );
  }

  confirmReservation() {

    if (
      !this.name.trim() ||
      !this.email.trim() ||
      !this.phone.trim() ||
      !this.date ||
      !this.time
    ) {
      alert('Please fill in all required fields.');
      return;
    }

  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(this.email.trim())) {
      alert('Please enter a valid email address.');
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(this.phone.trim())) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    
    if (
      !Number.isInteger(Number(this.guests)) ||
      Number(this.guests) < 1
    ) {
      alert('Number of guests must be at least 1.');
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const reservationDate = new Date(`${this.date}T00:00:00`);

    if (
      Number.isNaN(reservationDate.getTime()) ||
      reservationDate < today
    ) {
      alert('Please select today or a future date.');
      return;
    }

    // Validate reservation time
    if (!this.time) {
      alert('Please select a reservation time.');
      return;
    }

    // Validate table selection
    if (!this.selectedTable) {
      alert('Please select a table from the Tables page.');
      return;
    }

    // Prepare reservation details
    const reservationDetails = {
      name: this.name.trim(),
      email: this.email.trim(),
      phone: this.phone.trim(),
      guests: Number(this.guests),
      date: this.date,
      time: this.time,
      specialRequest: this.specialRequest.trim(),
      selectedMenu: [...this.selectedMenu],
      selectedTable: this.selectedTable,
      createdAt: new Date().toISOString()
    };

    
    try {
      this.saveReservation(reservationDetails);

      console.log('Reservation Details:', reservationDetails);

      alert(
        `Reservation confirmed for ${reservationDetails.name}!\n` +
        `Selected Table: ${reservationDetails.selectedTable}`
      );
    } catch (error) {
      console.error('Could not save reservation:', error);
      alert('Unable to save the reservation. Please try again.');
    }
  }
}
