import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudeComponent } from './etude/etude.component';
import { WelcomComponent } from './welcom/welcom.component';
import { AccountComponent } from './account/account.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { IncidentComponent } from './incident/incident.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudeComponent,
    WelcomComponent,
    AccountComponent,
    DashbordComponent,
    IncidentComponent,
    
    RendezVousComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
