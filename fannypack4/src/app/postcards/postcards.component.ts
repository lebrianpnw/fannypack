import { Component, OnInit } from '@angular/core';
import { PostcardsService } from '../postcard-service.service';
import IPostcardModel from '../share/IPostcardModel';

@Component({
  selector: 'app-postcards',
  templateUrl: './postcards.component.html',
  styleUrls: ['./postcards.component.css']
})
export class PostcardsComponent implements OnInit {

  postcards: IPostcardModel[];
  //postcards: any; 

  constructor(postcard$: PostcardsService) { 
    postcard$.getPostcards()
    .subscribe(
      result => this.postcards = result,
      () => {},
      () => console.log('REST call:' + this.postcards)
    );
  }

  ngOnInit() {
  }

}
