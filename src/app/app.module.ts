import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LunchComponent } from './lunch/lunch.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LegendComponent } from './legend/legend.component';
import { LegendRobertComponent } from './legend-robert/legend-robert.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LunchComponent,
    DashboardComponent,
    HelpPageComponent,
    LegendComponent,
    LegendRobertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
