import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { PostcardsComponent } from './postcards/postcards.component';
import { PostcardComponent } from './postcard/postcard.component';
import { PostcardGridComponent } from './postcards/postcard-grid/postcard-grid.component';
import { CollectionsComponent } from './collections/collections.component';

import { PostcardsService } from './postcard-service.service';
import { CollectionsService } from './collection-service.service';
import { CollectionComponent } from './collection/collection.component';



@NgModule({
  declarations: [
    AppComponent,
    PostcardsComponent,
    PostcardComponent,
    HowitworksComponent,
    PostcardGridComponent,
    CollectionsComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PostcardsService, CollectionsService],

      /* {provide: APP_BASE_HREF, useValue: '/'}, PostcardsService], */
  bootstrap: [AppComponent]
})
export class AppModule { }
