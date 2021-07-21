import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/components/about/about.component';
import { FeedbackComponent } from './core/components/feedback/feedback.component';
import { HomeComponent } from './core/components/home/home.component';
import { PagenotfoundComponent } from './core/components/pagenotfound/pagenotfound.component';
import { ServiceComponent } from './core/components/service/service.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"service",
    loadChildren:()=>import("./technology/technology.module").then(module=>module.TechnologyModule)
  },
  {
    path:"feedback",
    component:FeedbackComponent
  },
  {
    path:"**",
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
