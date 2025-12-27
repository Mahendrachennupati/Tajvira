import { Component, } from '@angular/core';


@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent {
sidebarVisible:boolean = false;
overlayVisible:boolean = false;
navItems = [
    { label: 'Home', route: '/home' },
    { label: 'Services', route: '/services' },
    { label: 'Projects', route: '/projects' },
    { label: 'About Us', route: '/about-us' },
    { label: 'Contact', route: '/get-in-touch' },
    
  ];
  
  constructor() { }

  

  


  
}
