import { Component, OnInit } from '@angular/core';
import { CollectionsService } from '../collection-service.service';
import ICollectionModel from '../share/IPostcardModel';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})

export class CollectionComponent implements OnInit {
  collectionID: number;
  userID: number;
  title: string;
  imageURL: string;
  description: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private collection$: CollectionsService
  ) {
    this.collectionID = route.snapshot.params['id'];
    //need a new func in PostcardsService to get one postcard
   collection$.getCollection(this.collectionID)
  .subscribe(
    result => {
      this.userID = result. userID;
      this.title = result.title;
      this.imageURL = result.imageURL;
      this.description = result.description;
    },
    () => {},
    () => {}
  );
   }

  ngOnInit() {
  }

}
