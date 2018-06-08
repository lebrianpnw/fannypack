import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable()
export class PostcardsService {

  constructor(private http: Http) { }

  getPostcards() {
    return this.http.get( './app/postcards/')
        .pipe(map(response => response.json()));
  }

  getPostcard(index: Number) {
    return this.http.get( './app/postcards/' + index)
    .pipe(map(response => response.json()));
  }

}
