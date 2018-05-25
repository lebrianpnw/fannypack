import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostcardsComponent } from './postcards/postcards.component';
import { APP_BASE_HREF } from '@angular/common';
import { PostcardsService } from './postcard-service.service';



@NgModule({
  declarations: [
    AppComponent,
    PostcardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, PostcardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
