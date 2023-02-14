import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { KrimiComponent } from './krimi/krimi.component';
import { ThrillerComponent } from './thriller/thriller.component';

const routes: Routes = [
  {path: 'home', redirectTo: '', pathMatch: 'full'},
   {path:'', component: FooldalComponent},
  {path:'thriller', component: ThrillerComponent},
  {path:'krimi', component: KrimiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
