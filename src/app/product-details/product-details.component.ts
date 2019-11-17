import { Component, OnInit } from '@angular/core';
// import ActiveRoute
import { ActivatedRoute } from '@angular/router';

// Arrange to use product data from an external file.
import { products } from '../products';
// import Cart Service
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  // define the product property
  product: any;

  addToCart(product: any){
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  //inject: ActivatedRoute, cartService
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }



  
  /* Good Ex for bad input: 'productID'
   ngOnInit() {
     this.route.paramMap.subscribe(params =>{
       this.product = products[+params.get('productID')];
     });
   }
  */

  //subscribe to route params and 
  //fetch the product based on the productId.
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}
