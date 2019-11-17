import { Injectable } from '@angular/core';

//use HttpClient, not module
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})


export class CartService {

  items = [];
  //basic methods
  addToCart(product){ this.items.push(product); }
  getItems(){ return this.items; }
  clearCart(){  this.items = []; return this.items; }
  //Use Http Get()
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }


  // inject HttpClient
  constructor(
    private http: HttpClient
  ) { }
}
