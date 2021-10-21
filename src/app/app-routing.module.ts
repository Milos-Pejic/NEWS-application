import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SportComponent } from './sport/sport.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {path: '', redirectTo: '/sport', pathMatch: 'full' },
  {path:'sport', component:SportComponent},
  {path:'technology', component:TechnologyComponent},
  {path: 'not-found', component: PageNotFoundComponent },
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
