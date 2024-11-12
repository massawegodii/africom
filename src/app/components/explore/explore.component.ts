import { Component } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent {
  stations = [
    { id: 'A1', name: 'Gas Station 1', address: 'Makumbusho', status: 'In Transit' },
    { id: 'A3', name: 'Petrol Station 2', address: 'Sinza', status: 'No Connection' },
    { id: 'A5', name: 'Gas Station 3', address: 'Mbezi', status: 'In Transit' },
    { id: 'A7', name: 'Petrol Station 4', address: 'Mwenge', status: 'In Transit' },
  ];

  selectedStation = {
    name: 'Gas Station 1',
    address: 'Makumbusho',
    distance: 1.2,
    status: 'In Transit'
  };
}
