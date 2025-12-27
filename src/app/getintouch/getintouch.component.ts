import { Component } from '@angular/core';

@Component({
  selector: 'app-getintouch',
  templateUrl: './getintouch.component.html',
  styleUrls: ['./getintouch.component.css']
})
export class GetintouchComponent {
projectTypes = [
  { label: 'Residential Construction', value: 'residential' },
  { label: 'Commercial Projects', value: 'commercial' },
  { label: 'Interior Design', value: 'interior' },
  { label: 'Renovation', value: 'renovation' }
];

}
