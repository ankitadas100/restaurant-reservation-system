import { Component } from '@angular/core';

import { Hero } from '../../Components/hero/hero';
import { About } from '../../Components/about/about';
import { Highlights } from '../../Components/highlights/highlights';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Highlights],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
