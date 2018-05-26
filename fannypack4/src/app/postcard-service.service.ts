import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';



@Injectable()
export class PostcardsService {

  constructor(private http: Http) { }

  getPostcards() {
    return this.http.get( 'http://localhost:8080/json/postcards.json')
        /*    return this.http.get( '/app/list/')*/
        .pipe(map(response => {response.json()}));
  }

}
