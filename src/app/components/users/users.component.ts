import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  showDetail = false;
  selectedPerson: string = '';

  openDetail(person: string) {
    this.selectedPerson = person;
    this.showDetail = true;
  }

  closeDetail() {
    this.showDetail = false;
  }
}
