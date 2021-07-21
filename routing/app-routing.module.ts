import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaptainAmericaComponent } from './captain-america/captain-america.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { IronManComponent } from './iron-man/iron-man.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SpidermanComponent } from './spiderman/spiderman.component';

const routes: Routes = [
  {path:"",redirectTo:"ironman",pathMatch:"full"},
  {
    path:"ironman/:name",
    component:HeroDetailsComponent,
    children:[
      {path:"spiderman",component:SpidermanComponent}
    ]
  },
  {path:'ironman',component:IronManComponent},
  {path:'captainamerica',component:CaptainAmericaComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingCompontent = [IronManComponent,
                                 CaptainAmericaComponent,
                                 PagenotfoundComponent,
                                 HeroDetailsComponent,
                                 SpidermanComponent
                                ];