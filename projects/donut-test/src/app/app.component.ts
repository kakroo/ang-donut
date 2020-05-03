import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'donut-test';
  donutData = [
    { name: 'Red', value: '30', color: '#E25325' },
    { name: 'Blue', value: '20', color: '#6064CF' },
    { name: 'Black', value: '40', color: '#5A5C59' },
    { name: 'Green', value: '10', color: '#50FD1D' }
  ];
}
