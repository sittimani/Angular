import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnchorDirective } from './anchor.directive';
import { HelloComponent } from './hello.component';
import { HiComponent } from './hi.component';
import { NamealoneComponent } from './namealone/namealone.component';
import { NicknameComponent } from './nickname/nickname.component';
import { NameService } from './name.service';

@NgModule({
  declarations: [
    AppComponent,
    AnchorDirective,
    HelloComponent,
    HiComponent,
    NamealoneComponent,
    NicknameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents:[HelloComponent,HiComponent],
  providers: [NameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
