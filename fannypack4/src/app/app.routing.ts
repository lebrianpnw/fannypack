import { Routes, RouterModule } from '@angular/router';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { PostcardsComponent } from './postcards/postcards.component';
import { CollectionsComponent } from './collections/collections.component';


const routes: Routes = [
    { path: '', component: HowitworksComponent },
    { path: 'postcards', component: PostcardsComponent },
    { path: 'collections', component: CollectionsComponent },
    

];

export const routing = RouterModule.forRoot(routes);