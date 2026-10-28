import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Reservation } from './pages/reservation/reservation';
import { Tables } from './pages/tables/tables';
import { MyReservations } from './pages/my-reservations/my-reservations';
import { AdminDashboard } from './pages/admin-dashboard/admin-dashboard';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'reservation',
    component: Reservation
  },
  {
    path: 'tables',
    component: Tables
  },
  {
  path: 'my-reservations',
  component: MyReservations
},
{
  path: 'admin',
  component: AdminDashboard
}
];