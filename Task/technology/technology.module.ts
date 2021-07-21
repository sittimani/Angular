import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './components/root/root.component';
import { TechnologyRoutingModule } from './technology-routing.module';
import { AngularComponent } from './components/angular/angular.component';



@NgModule({
  declarations: [
    RootComponent,
    AngularComponent
  ],
  imports: [
    CommonModule,
    TechnologyRoutingModule
  ]
})
export class TechnologyModule { }
