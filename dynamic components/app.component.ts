import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { AnchorDirective } from './anchor.directive';
import { HelloComponent } from './hello.component';
import { HiComponent } from './hi.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamicComponents';
  @ViewChild(AnchorDirective, { static: true }) childRef!: AnchorDirective;
  components = [HiComponent,HelloComponent];

  constructor(public factoryRes: ComponentFactoryResolver){
  }
  show(id:number){
    console.log(this.childRef);
    this.childRef.viewRef.clear();
    const resolvedFactory = this.factoryRes.resolveComponentFactory(this.components[id]);
    this.childRef.viewRef.createComponent(resolvedFactory);
  }
}

