import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
packages = [
    {
      title: 'Basic',
      image: 'assets/basic.jpg',
      desc: 'Essential quality for budget-friendly homes.',
      price: '₹1,600 - ₹1,800',
      timeline: '6–8 Months',
      popular: false,
      inclusions: [
        'Standard Cement',
        'Vitrified Tiles',
        'Basic Sanitary Fittings',
        '2 Coats Paint'
      ],
      button: 'Get Basic Quote'
    },
    {
      title: 'Standard',
      image: 'assets/standard.jpg',
      desc: 'Perfect balance of quality and aesthetics for family homes.',
      price: '₹1,900 - ₹2,300',
      timeline: '8–10 Months',
      popular: true,
      inclusions: [
        'Premium Cement',
        'Granite/Marble Flooring',
        'Branded Fittings',
        'False Ceiling (Hall)'
      ],
      button: 'Get Standard Quote'
    },
    {
      title: 'Premium',
      image: 'assets/premium.jpg',
      desc: 'Luxury specifications for a modern, high-end lifestyle.',
      price: '₹2,500+',
      timeline: '10–14 Months',
      popular: false,
      inclusions: [
        'Top-tier Cement',
        'Italian Marble',
        'Smart Automation',
        'Full Teak Wood'
      ],
      button: 'Get Premium Quote'
    }
  ];
}
