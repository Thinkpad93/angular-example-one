import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  shippingCosts;

  constructor(private cartService: CartService) {
    this.shippingCosts = cartService.getShippingPrices();
   }

  ngOnInit() {
  }

}
