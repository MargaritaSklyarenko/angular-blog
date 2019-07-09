import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { PostDetailsComponent }  from './post-details/post-details.component';
import { AddPostComponent } from './add-post/add-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/:type', component: HomeComponent },
  { path: 'home/:type/:id', component: HomeComponent },
  { path: 'detail/:id', component: PostDetailsComponent },
  { path: 'add', component: AddPostComponent },
  { path: 'delete/:id', component: DeletePostComponent },
  { path: 'edit/:id', component: AddPostComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

/*const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', children: [
    { path: 'add', component: AddPostComponent },
    { path: 'delete/:id', component: DeletePostComponent },
    { path: 'edit/:id', component: AddPostComponent },
  ] },
  { path: 'detail/:id', component: PostDetailsComponent }
];
*/