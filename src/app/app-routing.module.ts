import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudeComponent } from './etude/etude.component';
import { WelcomComponent } from './welcom/welcom.component';

const routes: Routes = [
  {path:'etudes',component:EtudeComponent},
  {path:'',component:WelcomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
