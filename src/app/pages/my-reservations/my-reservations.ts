
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-reservations',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './my-reservations.html',
  styleUrl: './my-reservations.css'
})
export class MyReservations implements OnInit {

  reservations: any[] = [];

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    const savedReservations = localStorage.getItem('reservations');

    this.reservations = savedReservations
      ? JSON.parse(savedReservations)
      : [];
  }

  cancelReservation(index: number): void {
    const confirmed = confirm(
      'Are you sure you want to cancel this reservation?'
    );

    if (!confirmed) {
      return;
    }

    this.reservations.splice(index, 1);

    localStorage.setItem(
      'reservations',
      JSON.stringify(this.reservations)
    );
  }
}
