import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyComponent } from './dummy/dummy.component';
import { DataService } from '../services/data.service';



@NgModule({
  declarations: [
    DummyComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    DataService
  ]
})
export class SecondmoduleModule { }
