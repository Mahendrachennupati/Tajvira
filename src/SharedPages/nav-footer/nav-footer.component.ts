import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.css']
})
export class NavFooterComponent {
  navItems = [
    { label: 'Home', route: '/home' },
    { label: 'Services', route: '/services' },
    { label: 'Projects', route: '/projects' },
    { label: 'About Us', route: '/about-us' },
    { label: 'Contact', route: '/get-in-touch' },
    
  ];
contactInfo:any = [
  {
    title: 'Get in Touch',
    icon: 'pi pi-phone',
    items: [
      {
        icon: 'pi pi-map-marker',
        value: '123, Tech Park Road, Hitech City, Hyderabad, 500081'
      },
      {
        icon: 'pi pi-phone',
        value: '+91 98765 43210'
      },
      {
        icon: 'pi pi-envelope',
        value: 'hello@tajvira.com'
      }
    ]
  }
]

}
