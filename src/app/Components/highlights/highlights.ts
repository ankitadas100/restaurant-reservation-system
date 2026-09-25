import { Component } from '@angular/core';

@Component({
  selector: 'app-highlights',
  imports: [],
  templateUrl: './highlights.html',
  styleUrl: './highlights.css'
})
export class Highlights {

  highlights = [
    {
      number: '20+',
      title: 'Signature Dishes',
      description: 'Authentic flavours crafted with care.'
    },
    {
      number: '500+',
      title: 'Happy Guests',
      description: 'Memorable dining experiences.'
    },
    {
      number: '15+',
      title: 'Dining Tables',
      description: 'Comfortable spaces for every occasion.'
    }
  ];

}