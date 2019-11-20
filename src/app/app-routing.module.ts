import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  {
    path: 'images',
    component: ImagesComponent,
  },
  {
    path: 'articles',
    component: ArticlesComponent,
  },
  {
    path: 'articles:language',
    component: ArticlesComponent,
  },
  {
    path: '**',
    redirectTo: 'images',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
