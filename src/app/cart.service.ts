import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  //define an items property
  items = [];
  // three methods to manipulate carts
  addToCart(product){
    this.items.push(product);
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items = [];
    return this.items;
  }

  constructor() { }
}
