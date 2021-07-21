import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondmoduleModule } from './secondmodule/secondmodule.module';
import { ShareDataService } from './share-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecondmoduleModule
  ],
  providers: [ShareDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
