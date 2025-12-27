import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
stats = [
  { value: '14+', label: 'Years Experience' },
  { value: '350+', label: 'Projects Completed' },
  { value: '2M+', label: 'Sq. Ft. Delivered' },
  { value: '120+', label: 'Team Strength' }
];

leaders = [
  {
    name: 'Arjun Vira',
    role: 'CEO & Founder',
    image: '/assets/home/quality.avif'
  },
  {
    name: 'Meera Taj',
    role: 'Chief Architect',
    image: '/assets/home/quality.avif'
  },
  {
    name: 'Vikram Singh',
    role: 'Head of Engineering',
   image: '/assets/home/quality.avif'
  }
];

}
