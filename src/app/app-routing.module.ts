import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { LunchComponent } from './lunch/lunch.component';
import { HelpPageComponent } from './help-page/help-page.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, 
  { path: 'lunch', component: LunchComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'help-page', component: HelpPageComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
