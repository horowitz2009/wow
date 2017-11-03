import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ProductService } from './product/product.service';
import { ProductDatastoredService } from './product/product-datastored.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list.component';
import { KeepHtmlPipe } from './keephtml/keep-html.pipe';
import { RestComponent } from './rest/rest.component';

import { CheckoutComponent } from './checkout/checkout.component';
import { EmailOptionalValidatorDirective } from './email-optional-validator.directive';

// import { HttpModule }    from '@angular/http';
import * as $ from 'jquery';
import { NavigationComponent } from './navigation/navigation.component';

export function HttpLoaderFactory( http: HttpClient ) {
    return new TranslateHttpLoader( http );
}

@NgModule( {
    declarations: [
        AppComponent,
        ProductComponent,
        ProductListComponent,
        KeepHtmlPipe,
        CheckoutComponent,
        RestComponent,
        EmailOptionalValidatorDirective,
        NavigationComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        //HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService ),

        TranslateModule.forRoot( {
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        } ),
    ],
    providers: [ProductService, ProductDatastoredService],
    bootstrap: [AppComponent]
} )
export class AppModule { }
