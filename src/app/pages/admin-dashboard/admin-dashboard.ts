
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard implements OnInit {

  reservations: any[] = [];

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    const saved = localStorage.getItem('reservations');

    this.reservations = saved ? JSON.parse(saved) : [];
  }

  get totalGuests(): number {
    return this.reservations.reduce(
      (total, reservation) => total + Number(reservation.guests || 0),
      0
    );
  }
}
