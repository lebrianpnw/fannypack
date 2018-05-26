import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { PostcardsComponent } from './postcards/postcards.component';
import { HowitworksComponent } from './howitworks/howitworks.component';

import { PostcardsService } from './postcard-service.service';



@NgModule({
  declarations: [
    AppComponent,
    PostcardsComponent,
    HowitworksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PostcardsService],

      /* {provide: APP_BASE_HREF, useValue: '/'}, PostcardsService], */
  bootstrap: [AppComponent]
})
export class AppModule { }
