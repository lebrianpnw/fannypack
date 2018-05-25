import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PostcardServiceService {

  constructor(private http: Http) { }

  getPostcards() {
    return this.http.get( 'http://localhost:8080/json/lists.json')
//    return this.http.get( '/app/list/')
    .map(response => response.json());
  }
}
