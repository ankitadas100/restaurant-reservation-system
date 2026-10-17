import { Component } from '@angular/core';
import { Hero } from '../../Components/hero/hero';
import { About } from '../../Components/about/about';
import { Highlights } from '../../Components/highlights/highlights';

@Component({
  imports: [Hero, About, Highlights],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
