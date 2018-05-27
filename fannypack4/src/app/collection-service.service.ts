import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable()
export class CollectionsService {

  constructor(private http: Http) { }

  getCollections() {
    return this.http.get( 'http://localhost:8080/app/collections/')
        .pipe(map(response => response.json()));
  }

}
