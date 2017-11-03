import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
//import { ProductService } from "./product/product.service";
import { ProductDatastoredService } from "./product/product-datastored.service";
import { Product } from "./product/product";
import { Observable } from "rxjs/Observable";

import * as $ from 'jquery';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
} )
export class AppComponent implements OnInit {
    title = 'app';
    param = { value: 'world' };
    products: Observable<Product[]> = undefined;

    constructor( public translate: TranslateService, private productService: ProductDatastoredService ) {
        console.log( 'app.component' );

        //      translate.setTranslation('en', {
        //          'HELLO': 'maraba {{value}}'
        //      }, true);
        //      
        //      translate.setTranslation('en', {
        //          "HOME": {
        //              "TITLE": "Hello Angular 2 with ngx-translate!",
        //              "SELECT": "Change language"
        //            },
        //            "LAZY": "I'm lazy loaded!"
        //          }, true);
        //      
        //      translate.setTranslation('fr', {
        //          "HOME": {
        //              "TITLE": "FRHello Angular 2 with ngx-translate!",
        //              "SELECT": "fR Change language"
        //            },
        //            "LAZY": "I'm lazy FR loaded!"
        //          }, true);
        //      console.log("DAMN")

        // this language will be used as a fallback when a translation isn't found in the current language
        //translate.setDefaultLang('en');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        //translate.use('fr');
        console.log( "app componened done" );
    }

    toggleTitle() {
        $('.title').slideToggle(400, () => {
            console.log('damn');
        });
    }

    deleteProduct( id: number ) {
        console.log( 'deleting...' );
        this.productService.remove(id);
//        const res = this.productService.delete2( id ).then( res => {
//            console.log( "res:" );
//            console.log( res );
//
//        } );
    }




    ngOnInit() {
        // this language will be used as a fallback when a translation isn't found in the current language
        //this.translate.setDefaultLang('en');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        //this.translate.use('fr');
        
            this.products = this.productService.products; // subscribe to entire collection
//            this.singleTodo$ = this.todoService.todos
//                                   .map(todos => todos.find(item => item.id === '1'));  
//                                   // subscribe to only one todo 
//              
            this.productService.loadAll();    // load all todos
            //this.todoService.load('1');    // load only todo with id of '1'
    }
}
