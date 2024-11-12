import { Component } from '@angular/core';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrl: './transport.component.scss'
})
export class TransportComponent {
  requests = [
    {
      requestDate: '10 November 2024',
      overtimeDate: '19 December 2024',
      employee: { name: 'Godfrey Matias', avatar: './assets/profile.png' },
      duration: '3 hours',
      overtime: '07:00 PM - 10:00 PM',
      reason: 'Traffic Jam',
      status: 'Pending'
    },
    {
      requestDate: '12 November 2024',
      overtimeDate: '12 December 2024',
      employee: { name: 'Conrad Buberwa', avatar: './assets/profile.png' },
      duration: '2 hours 30 min',
      overtime: '08:30 PM - 11:00 PM',
      reason: 'System or technological failure',
      status: 'Rejected'
    },
    {
      requestDate: '24 November 2024',
      overtimeDate: '24 December 2024',
      employee: { name: 'Tony Gaston', avatar: './assets/profile.png' },
      duration: '2 hours',
      overtime: '07:00 PM - 09:00 PM',
      reason: 'Delays or failures from external parts',
      status: 'Pending'
    },
   
  ];
}
