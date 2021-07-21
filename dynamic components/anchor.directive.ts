import { Directive, ViewChild, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ad-host]'
})
export class AnchorDirective {
  constructor(public viewRef:ViewContainerRef) { }
 
}

// This directive tell where to insert a componetent
// viewContaierRef will give access to the element which going to insert dynamic component
