import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"catagory",
    loadChildren:()=>import("./catagory/catagory.module").then(module=>module.CatagoryModule)
  }
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes)
  ],
  exports: [
  RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }