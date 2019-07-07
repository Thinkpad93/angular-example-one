import { Component, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-prodct-list',
  templateUrl: './prodct-list.component.html',
  styleUrls: ['./prodct-list.component.css']
})
export class ProdctListComponent implements OnInit {

  products = products;

  constructor() { }

  ngOnInit() {
  }

  share(): void {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }  

}
