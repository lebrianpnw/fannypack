import { Component, OnInit } from '@angular/core';
import { PostcardsService } from '../postcard-service.service';
import IPostcardModel from '../share/IPostcardModel';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})

export class PostcardComponent implements OnInit {
  postcardID: Number;
  userID: Number;
  title: String;
  imageURL: String;
  description: String;
  rating: Number;
  cost: Number;
  activityLocation: String;
  activityCity: String;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postcard$: PostcardsService
  ) { 
      this.postcardID = route.snapshot.params['id'];
      //need a new func in PostcardsService to get one postcard
     postcard$.getPostcard(this.postcardID)
    .subscribe(
      result => {
        this.title = result.title;
        this.userID = result.userID;
        this.title = result.title;
        this.imageURL = result.imageURL;
        this.description = result.description;
        this.rating = result.rating;
        this.cost = result.cost;
        this.activityLocation = result.activityLocation;
        this.activityCity = result.activityCity;
      },
      () => {},
      () => {}
    );
  }

  ngOnInit():void {}

}
