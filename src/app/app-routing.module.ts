import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
  path: 'movie-list',
  children: [
    {
      path: '',
      loadChildren:
      './movie-list/movie-list.module#MovieListPageModule'
    },
    {
      path: ':id',
      loadChildren: './movies/movies.module#MoviesPageModule'
    }
  ]
}, 
  { path: 'add-movie', loadChildren: './add-movie/add-movie.module#AddMoviePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
