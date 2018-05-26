import { Routes, RouterModule } from '@angular/router';
import { PostcardsComponent } from './postcards/postcards.component';
import { HowitworksComponent } from './howitworks/howitworks.component';


const routes: Routes = [
    { path: '', component: HowitworksComponent },
    { path: 'postcards', component: PostcardsComponent },

];

export const routing = RouterModule.forRoot(routes);