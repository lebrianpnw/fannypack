import { Component, OnInit } from '@angular/core';
import { PostcardServiceService } from '../postcard-service.service';
import IPostcardModel from '../share/IPostcardModel';

@Component({
  selector: 'app-postcards',
  templateUrl: './postcards.component.html',
  styleUrls: ['./postcards.component.css']
})
export class PostcardsComponent implements OnInit {

  postcards: IPostcardModel[];

  constructor(list$: PostcardServiceService) {
    list$.getPostcards()
    .subscribe(
      result => this.postcards = result,
      () => {},
      () => console.log('REST call:' + this.postcards)
    );
   }

  ngOnInit() {
  }

}