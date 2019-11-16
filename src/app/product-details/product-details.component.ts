import { Component, OnInit } from '@angular/core';

// import ActiveRoute
import { ActivatedRoute } from '@angular/router';
// Arrange to use product data from an external file.
import { products } from '../products';
//import Cart Service
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  // define the product property
  product: any;

  //implement addToCart()
  addToCart(product: any){
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  //



  //inject the ActivatedRoute and 
  //cartService
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }


  //subscribe !!!
  // double-check this paramMap & sub later
  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      this.product = products[+params.get('productID')];
    });

  }

}
