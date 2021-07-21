import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatagoryComponent } from './catagory.component';
import { DeveloperComponent } from './developer/developer.component';
import { TesterComponent } from './tester/tester.component';

const routes: Routes = [
  {
    path:"",
    component:CatagoryComponent
  },
  {
    path:"developer",
    component:DeveloperComponent
  },
  {
    path:"tester",
    component:TesterComponent
  }
];

@NgModule({
  imports: [
  RouterModule.forChild(routes)
  ],
  exports: [
  RouterModule
  ],
  declarations: []
})
export class CatagoryRoutingModule { }