import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from "./product/product.service";

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
} )
export class AppComponent implements OnInit {
    title = 'app';
    param = { value: 'world' };

    constructor( public translate: TranslateService, private productService: ProductService ) {
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


    deleteProduct( id: number ) {
        console.log( 'deleting...' );
        let res = this.productService.delete2( id ).then( res => {
            console.log( "res:" );
            console.log( res );

        } );
    }




    ngOnInit() {
        // this language will be used as a fallback when a translation isn't found in the current language
        //this.translate.setDefaultLang('en');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        //this.translate.use('fr');
    }
}
