import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'data-app-seed';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('hello');
    this.http
      .get('http://localhost:3000/people')
      .subscribe(resp => console.log(resp));
  }
}
