import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from '../core/components/pagenotfound/pagenotfound.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { AngularComponent } from './components/angular/angular.component';
import { DisplayComponent } from './components/display/display.component';
import { RootComponent } from './components/root/root.component';

const routes: Routes = [
    {
        path:"",
        component:RootComponent
    },
    {
      path:"angular",
      component: AngularComponent,
    },
    {
      path:"adduser",
      component:AdduserComponent,
    },
    {
      path:"display",
      component:DisplayComponent
    },
    {
      path:"update/:id",
      component:AdduserComponent
    },
    {
      path:"**",
      component:PagenotfoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologyRoutingModule { }
