import { Component, OnInit } from '@angular/core';
import { CollectionsService } from '../collection-service.service';
import ICollectionModel from '../share/ICollectionModel';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  collections: ICollectionModel[];
  //postcards: any; 

  constructor(collection$: CollectionsService) { 
    collection$.getCollections()
    .subscribe(
      result => this.collections = result,
      () => {},
      () => console.log('REST call:' + this.collections)
    );
  }

  ngOnInit() {
  }

}