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

  confirmReservation() {
    console.log('Reservation Details:', {
      name: this.name,
      email: this.email,
      phone: this.phone,
      guests: this.guests,
      date: this.date,
      time: this.time,
      specialRequest: this.specialRequest
    });

    alert(`Reservation confirmed for ${this.name}!`);
  }

}