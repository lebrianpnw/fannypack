import { Input, Component, OnInit } from '@angular/core';
import IPostcardModel from '../../share/IPostcardModel';

@Component({
  selector: 'app-postcard-grid',
  templateUrl: './postcard-grid.component.html',
  styleUrls: ['./postcard-grid.component.css']
})
export class PostcardGridComponent implements OnInit {

@Input() postcard: IPostcardModel
@Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
