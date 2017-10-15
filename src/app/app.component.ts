import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  param = {value: 'world'};

  constructor(translate: TranslateService) {
      
      translate.setTranslation('en', {
          'HELLO': 'maraba {{value}}'
      }, true);
      
      translate.setTranslation('en', {
          "HOME": {
              "TITLE": "Hello Angular 2 with ngx-translate!",
              "SELECT": "Change language"
            },
            "LAZY": "I'm lazy loaded!"
          }, true);
      
      translate.setTranslation('fr', {
          "HOME": {
              "TITLE": "FRHello Angular 2 with ngx-translate!",
              "SELECT": "fR Change language"
            },
            "LAZY": "I'm lazy FR loaded!"
          }, true);
      console.log("DAMN")
      
      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang('en');

       // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use('fr');
  }
}
