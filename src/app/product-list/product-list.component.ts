import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  //display this msg on share()
  share() {
    window.alert('The product has been shared!');
  }

  //actions on button being clicked
  onNotify() {
    window.alert('You will be notified when the product goes on sale!');
  }

  


}