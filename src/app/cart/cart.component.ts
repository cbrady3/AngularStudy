import { Component, OnInit } from '@angular/core';
//to use cart service
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  //def items property
  items: any[];
  
  // inject CartService
  constructor(
    private cartService: CartService
  ){
    this.items = this.cartService.getItems(); // why within constructor ?
  }

  ngOnInit() {
  }

}
