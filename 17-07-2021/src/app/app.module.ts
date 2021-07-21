import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DummyComponent } from './app-dummy.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { LetsUseOnChangeComponent } from './lets-use-on-change/lets-use-on-change.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    LetsUseOnChangeComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[DummyComponent]
})
export class AppModule { }
