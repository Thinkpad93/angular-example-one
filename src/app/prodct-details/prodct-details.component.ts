import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-prodct-details',
  templateUrl: './prodct-details.component.html',
  styleUrls: ['./prodct-details.component.css']
})
export class ProdctDetailsComponent implements OnInit {

  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService) {

  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  ngOnInit() {
    console.log(this.route);
    //在 ngOnInit() 方法中，订阅（subscribe）路由参数并根据其 productId 获取商品信息。
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    })
  }

}
