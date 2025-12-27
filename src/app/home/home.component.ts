import { Component, ViewChild } from '@angular/core';
import { Carousel } from 'primeng/carousel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
 
})
export class HomeComponent{
  showConsulation:boolean = false;
  @ViewChild(Carousel) carousel!: Carousel;
  qualityItems = [
  {
    icon: 'pi-shield',
    title: '10-Year Warranty',
    description:
      'Our structures are built to last. We offer a comprehensive 10-year warranty on structure and 1-year on seepage.'
  },
  {
    icon: 'pi-check-circle',
    title: 'No Cost Overruns',
    description:
      'Our AI-powered estimation ensures 99% accuracy. The price we quote is the price you pay. No surprises.'
  },
  {
    icon: 'pi-clock',
    title: 'On-Time Delivery',
    description:
      'We value your time. Our strict penalty clauses ensure we pay you rent if we delay the project.'
  },
  {
    icon: 'pi-bookmark',
    title: 'Certified Materials',
    description:
      'We only use premium, lab-tested materials from top brands like Ultratech, Tata Steel, and Jaguar.'
  },
  {
    icon: 'pi-users',
    title: 'Daily Reports',
    description:
      'Track progress from your phone with daily photos, video updates, and milestone tracking via WhatsApp.'
  },
  {
    icon: 'pi-hammer',
    title: 'In-House Team',
    description:
      'No subcontracting to random vendors. Our skilled labor and engineers are on our payroll.'
  }
];
services = [
  {
    title: 'Residential Construction',
    description: 'Turnkey home construction services with complete project management.',
    index:1
  },
  {
    title: 'Commercial Projects',
    description: 'Office spaces, retail stores, and commercial complexes built to scale.',
    index:2
  },
  {
    title: 'Interior Design',
    description: 'Aesthetics meets functionality. Transform your space with our experts.',
    index:3
  },
  {
    title: 'Renovation',
    description: 'Breathe new life into old structures with structural strengthening.',
    index:4
  }
];
projects = [
  {
    category: 'RESIDENTIAL',
    title: 'Sunrise Villa',
    location: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470'
  },
  {
    category: 'COMMERCIAL',
    title: 'TechHub Office',
    location: 'Hyderabad',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e'
  },
  {
    category: 'INTERIORS',
    title: 'Greenwood Apartment',
    location: 'Pune',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156'
  }
];

responsiveOptions = [
            {
                breakpoint: '1400px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '1220px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '1100px',
                numVisible: 1,
                numScroll: 1
            }
  ];
autoPlayInterval: any;
testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Homeowner',
    initials: 'RK',
    rating: 5,
    avatarBg: '#4FC3F7',
    message:
      'TajVira made our dream home a reality. The transparency in pricing and daily updates were a game changer.'
  },
  {
    name: 'Sneha Reddy',
    role: 'Architect',
    initials: 'SR',
    rating: 5,
    avatarBg: '#F28B82',
    message:
      'Professional team that respects design intent. Great attention to detail in execution.'
  },
  {
    name: 'Amit Verma',
    role: 'Business Owner',
    initials: 'AV',
    rating: 4,
    avatarBg: '#B3E5FC',
    message:
      'They delivered our office space 2 weeks ahead of schedule. Highly recommended for commercial projects.'
  }
];

  ngOnInit(): void {
    this.autoPlayInterval = setInterval(() => {
      if (this.carousel) this.carousel.navForward(0);
    }, 2000);
    
  }
  ngOnDestroy() {
    if (this.autoPlayInterval) clearInterval(this.autoPlayInterval);
  }

}