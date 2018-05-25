import { Component, OnInit } from '@angular/core';
import { PostcardServiceService } from '../postcard-service.service';
import IPostcardModel from '../share/IPostcardModel';


@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {

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
