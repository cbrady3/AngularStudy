import { Component, OnInit } from '@angular/core';
// to allow products be passed as input to components
import { Input } from '@angular/core';
// for outputs and eventEmitters
import { Output, EventEmitter } from '@angular/core';



/*
  @Component decorator: indicating its 
  a component with its selector (identifying the components)
  and referenced templates and styles.
*/
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

//handles functionality for the component
export class ProductAlertsComponent implements OnInit {

  //pass product as input
  @Input() product: any;
  /*
    def notify : an instance of event emitter
  */ 
  @Output() notify = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

}
