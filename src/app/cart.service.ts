import { Injectable } from '@angular/core';

//为购物车服务启用 HttpClient
import {  HttpClient  } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CartService {
   //items 属性来把当前商品的列表（数组）存储在购物车中
    items = [];


    constructor(private http: HttpClient) {

    }

    addToCart(product) {
        this.items.push(product);
    }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }

    getShippingPrices() {
        return this.http.get('/assets/shipping.json');
    }
}