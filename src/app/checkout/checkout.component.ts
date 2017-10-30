import { Component, OnInit } from '@angular/core';
import { CheckoutModel } from './checkout-model';

@Component( {
    selector: 'checkout-form',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
} )
export class CheckoutComponent implements OnInit {

    model = new CheckoutModel("", "0887676756");
    submitted = false;
    
    constructor() { }

    ngOnInit() {
    }
    
    onSubmit() {
        this.submitted = false;
        console.log("WE'RE DONE HERE!");
    }
    
    get diagnostic() {
        return JSON.stringify(this.model);
    }

}
