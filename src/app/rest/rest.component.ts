import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent implements OnInit {
  foo = "bar";
  constructor() { 
    console.log("REST constructor");
  }

  ngOnInit() {
    console.log("REST on init");
  }

}
