import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PrintComponent } from './core/print/print.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: PrintComponent },
  { path: '', component: HomeComponent , pathMatch: 'full' },
  { path: '**', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
