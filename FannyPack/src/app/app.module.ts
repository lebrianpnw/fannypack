import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostcardComponent } from './postcard/postcard.component';
import { PostcardGridComponent } from './postcard/postcard-grid/postcard-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    PostcardComponent,
    PostcardGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
