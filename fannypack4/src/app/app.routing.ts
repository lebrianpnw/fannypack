import { Routes, RouterModule } from '@angular/router';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { PostcardsComponent } from './postcards/postcards.component';
import { CollectionsComponent } from './collections/collections.component';
//import { PostcardComponent } from './postcard/postcard.component';


const routes: Routes = [
    { path: '', component: HowitworksComponent },
    { path: 'postcards', component: PostcardsComponent },
    { path: 'collections', component: CollectionsComponent },
  //  { path: 'postcards/:id', component: PostcardComponent },


];

export const routing = RouterModule.forRoot(routes);