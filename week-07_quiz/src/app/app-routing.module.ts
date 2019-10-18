import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'home-detail', loadChildren: './home/home.module#HomePageModule'},
  { path: 'home-detail/:id', loadChildren: './home/home-detail/home-detail.module#HomeDetailPageModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
