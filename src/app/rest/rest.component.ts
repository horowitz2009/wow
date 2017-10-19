import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent implements OnInit {
  foo = 'bar';
  constructor(private http: HttpClient) {}


  ngOnInit() {
    console.log('REST on init');
  }

}
