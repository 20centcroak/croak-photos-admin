import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleryComponent } from './galery/galery.component';
import { CollectionsComponent } from './collections/collections.component';

const routes: Routes = [
  { path: '', redirectTo: '/galery', pathMatch: 'full' },
  { path: 'galery', component: GaleryComponent },
  { path: 'collections', component: CollectionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
