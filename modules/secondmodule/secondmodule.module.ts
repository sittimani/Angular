import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyComponent } from './dummy/dummy.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { AppComponent } from '../app.component';
import { ShareDataService } from '../share-data.service';



@NgModule({
  declarations: [
    DummyComponent,
    SecondComponentComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DummyComponent
  ],
  providers:[
    ShareDataService
  ]
})
export class SecondmoduleModule { }
