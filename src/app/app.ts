import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './Components/navbar/navbar';
import { Hero } from './Components/hero/hero';
import { About } from './Components/about/about';
import { Highlights } from './Components/highlights/highlights';
import { Footer } from './Components/footer/footer';
import { Home } from './pages/home/home';
import { Reservation } from './pages/reservation/reservation';
import { Tables } from './pages/tables/tables';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Hero,About,Highlights,Footer,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}