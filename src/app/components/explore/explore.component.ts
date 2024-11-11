import { Component } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent {
  stations = [
    { id: 'B16495', name: 'Gas Station 1', address: '123 Main St, Cityville', status: 'In Transit' },
    { id: 'B16463', name: 'Petrol Station 2', address: '456 Elm St, Cityville', status: 'No Connection' },
    { id: 'B16555', name: 'Gas Station 3', address: '789 Oak St, Townsville', status: 'In Transit' },
    { id: 'B16531', name: 'Petrol Station 4', address: '101 Pine St, Metropolis', status: 'In Transit' },
  ];

  selectedStation = {
    name: 'Gas Station 1',
    address: '123 Main St, Cityville',
    distance: 1.2,
    status: 'In Transit'
  };
}
