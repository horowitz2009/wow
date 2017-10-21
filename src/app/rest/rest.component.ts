import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, Attributes } from '../product/product';
import { deserialize } from 'json-typescript-mapper';


interface ProductsRes {
    products: any[];
}


@Component( {
    selector: 'app-rest',
    templateUrl: './rest.component.html',
    styleUrls: ['./rest.component.scss']
} )
export class RestComponent implements OnInit {
    foo = 'bar';
    constructor( private http: HttpClient ) { }
    products: Product[];

    ngOnInit() {
        console.log( 'REST on init' );

        this.http.get<any>( 'http://localhost/api2.php/products?transform=true' ).subscribe(
            data => {
                console.log('good');
                this.products = data.products.map( p => {
                    if ( p.additionalAttributes ) {
                        //console.log('ahaaa');
                        //console.log(p.additionalAttributes);

                        p.additionalAttributes = JSON.parse( p.additionalAttributes );

                        //console.log(p.additionalAttributes);
                    }
                    return p;
                } );
            }
        );
    }


    /*this.base.getTransportTypes()
    .map(transportTypes => transportTypes
      .map(trType => ({ id: trType.TransportTypeId, name: trType.Name }))
    )
    .subscribe(options => this.transportOptions = options)*/

}
