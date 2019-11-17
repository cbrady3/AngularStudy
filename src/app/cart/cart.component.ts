import { Component, OnInit } from '@angular/core';
//Forms
import { FormBuilder } from '@angular/forms'

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
  //def checkoutForm
  checkoutForm: any;
  
  // inject CartService
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ){
    this.items = this.cartService.getItems(); // why within constructor ?
    //set up checkout Form
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '', 
    });
  }

  onSubmit(customerData){
    //Process checkout data here
    console.warn('Your order has been submitted', customerData);
    
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit() {
  }

}
