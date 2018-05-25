import { Routes, RouterModule } from '@angular/router';
import { PostcardsComponent } from './postcards/postcards.component';


const routes: Routes = [
    { path: 'postcards', component: PostcardsComponent },

];

export const routing = RouterModule.forRoot(routes);