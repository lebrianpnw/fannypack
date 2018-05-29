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
  postcardId: string;
  title: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private list$: PostcardsService
  ) { 
      this.postcardId = route.snapshot.params['id'];
      //need a new func in PostcardsService to get one postcard
    list$.getPostcards();
    .subscribe(
      result => {
        this.title = result.title;
      },
      () => {},
      () => {}
    );
  }

  ngOnInit():void {}

}
