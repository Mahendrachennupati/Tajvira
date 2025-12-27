import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {// projects.component.ts

  activeFilter = 'All';

  projects = [
    {
      category: 'Residential',
      title: 'Sunrise Villa',
      desc: 'A modern duplex with sustainable architecture.',
      location: 'Bangalore',
      area: '3500 sq.ft',
      image: '/assets/projects/p1.jpg'
    },
    {
      category: 'Commercial',
      title: 'TechHub Office',
      desc: 'Open plan office space for a leading startup.',
      location: 'Hyderabad',
      area: '12000 sq.ft',
      image: '/assets/projects/p2.jpg'
    },
    {
      category: 'Interiors',
      title: 'Greenwood Apartment',
      desc: 'Minimalist interior design with Scandinavian influence.',
      location: 'Pune',
      area: '1800 sq.ft',
      image: '/assets/projects/p3.jpg'
    }
  ];

  filteredProjects = [...this.projects];

  filterProjects(type: string) {
    this.activeFilter = type;

    if (type === 'All') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(
        p => p.category === type
      );
    }
  }


}
