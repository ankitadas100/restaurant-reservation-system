import { Component } from '@angular/core';
import { Navbar } from './Components/navbar/navbar';
import { Hero } from './Components/hero/hero';
import { About } from './Components/about/about';
import { Highlights } from './Components/highlights/highlights';
import { Footer } from './Components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar,Hero,About,Highlights,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}