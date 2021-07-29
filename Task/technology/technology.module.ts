import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './components/root/root.component';
import { TechnologyRoutingModule } from './technology-routing.module';
import { AngularComponent } from './components/angular/angular.component';
import { DisplayComponent } from './components/display/display.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    RootComponent,
    AngularComponent,
    DisplayComponent,
    AdduserComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TechnologyRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TechnologyModule { }
