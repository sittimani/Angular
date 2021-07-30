import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './component/parent/parent.component';
import { Child1Component } from './component/child1/child1.component';
import { Child2Component } from './component/child2/child2.component';
import { AuthGuard } from './guard/auth.guard';
import { TestComponent } from './component/test/test.component';
import { DeactivateGuard } from './guard/deactivate.guard';

const routes: Routes = [
  {
    path: "parent",
    component: ParentComponent,
    canActivate: [AuthGuard],
    data: ['admin'],
    canActivateChild: [AuthGuard],
    children:[
      {
        path: "child1",
        component: Child1Component,
        data: ['Manik']
      },
      {
        path: "child2",
        component: Child2Component,
        data: ['mani']
      }
    ]
  },
  {
    path: "test",
    component: TestComponent,
    canDeactivate: [DeactivateGuard]
  }
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
