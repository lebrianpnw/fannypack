import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PostcardsService {

  constructor(private http: Http) { }

  getPostcards() {
    return this.http.get( 'http://localhost:8080/json/postcards.json')
//    return this.http.get( '/app/list/')
    .map(response => response.json());
  }
}
