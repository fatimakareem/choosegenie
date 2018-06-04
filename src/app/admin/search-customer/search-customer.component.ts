import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html'
})
export class SearchCustomerComponent implements OnInit {
  status: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  navbarClass() {
    this.status = !this.status;
  }
}
