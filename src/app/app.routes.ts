import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Reservation } from './pages/reservation/reservation';
import { Tables } from './pages/tables/tables';

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
  }
];