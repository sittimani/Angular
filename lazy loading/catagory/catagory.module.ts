import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatagoryComponent } from './catagory.component';
import { CatagoryRoutingModule } from './catagory-routing.module';
import { DeveloperComponent } from './developer/developer.component';
import { TesterComponent } from './tester/tester.component';
import { DataService } from '../services/data.service';



@NgModule({
  declarations: [
    DeveloperComponent,
    TesterComponent,
    CatagoryComponent
  ],
  imports: [
    CommonModule,
    CatagoryRoutingModule
  ],
  providers:[DataService]
})
export class CatagoryModule { }
