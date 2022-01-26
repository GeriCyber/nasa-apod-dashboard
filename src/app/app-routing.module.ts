import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent, DetailComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {   
    path: 'detail', 
    component: DetailComponent 
  },
  { 
    path: '**', 
    redirectTo: '', 
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
