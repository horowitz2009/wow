import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product/product';


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
    product: Product;

    createNew() {
        //insert a product
        const p = new Product();
        p.name = 'some name goes here';
        p.published = false;
        p.categoryId = 112;
        p.additionalAttributes = JSON.stringify( { "a": "jeff is also here" } );
        p.price = 22.90;
        //p.createdOn = '20171021';
        this.http.post( 'http://localhost/api2.php/products',
            p ).subscribe( res => {
                console.log( typeof res );
                const newId: number = res as number;
                //TODO read the product again
                this.readOne(newId);
            } );

    }
    
    updateExisting() {
        //insert a product
        const p = new Product();
        p.name = 'some name goes here';
        p.published = false;
        p.categoryId = 112;
        p.additionalAttributes = JSON.stringify( { "a": "jeff is also here" } );
        p.price = 22.90;
        //p.createdOn = '20171021';
        this.http.post( 'http://localhost/api2.php/products',
            p ).subscribe( res => {
                console.log( typeof res );
                const newId: number = res as number;
                //TODO read the product again
                this.readOne(newId);
            } );

    }

    readOne( id: number ) {
        //get single product by id
        this.http.get<any>( 'http://localhost/api2.php/products/' + id + '?transform=true' ).subscribe(
            data => {
                console.log( 'read one and store it in this.product' );
                this.product = data;
                this.product.additionalAttributes = JSON.parse( data.additionalAttributes );
            }
        );

    }

    ngOnInit() {
        console.log( 'REST on init' );

        //get list of products
        this.http.get<any>( 'http://localhost/api2.php/products?transform=true' ).subscribe(
            data => {
                console.log( 'good' );
                this.products = data.products.map( p => {
                    if ( p.additionalAttributes ) {
                        //console.log('ahaaa');
                        //console.log(p.additionalAttributes);
                        console.log( 'good11' );
                        p.additionalAttributes = JSON.parse( p.additionalAttributes );
                        console.log( 'good12' );
                        //console.log(p.additionalAttributes);
                    }
                    return p;
                } );
            }
        );
        
        this.readOne(1);

    }


    /*this.base.getTransportTypes()
    .map(transportTypes => transportTypes
      .map(trType => ({ id: trType.TransportTypeId, name: trType.Name }))
    )
    .subscribe(options => this.transportOptions = options)*/

}
