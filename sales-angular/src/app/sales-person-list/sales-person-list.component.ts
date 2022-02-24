import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("mary", "jane", "jane@gmail.com",200000),
    new SalesPerson("john", "doe", "doe@gmail.com",2000),
    new SalesPerson("shane", "johnson", "johnson@gmail.com",300000),
    new SalesPerson("Kourtney", "Millard", "jane@gmail.com",45000)

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
