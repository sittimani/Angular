import { Component, Injector, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import {createCustomElement} from '@angular/elements'
import { DomSanitizer } from '@angular/platform-browser';
import { DummyComponent } from './app-dummy.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent{
  title = 'componentExample';
  name="Mani"
  msg:any;
  key = false;
  textValue:any;

  content:any;
  constructor(injector:Injector,dom:DomSanitizer){
   //this.content = "<app-dummy></app-dummy>";
    const cElement = createCustomElement(DummyComponent,{injector:injector});
    customElements.define('my-dummy',cElement);


    this.content = dom.bypassSecurityTrustHtml("<my-dummy></my-dummy>");
  }
  }
