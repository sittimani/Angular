import { AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-lets-use-on-change',
  templateUrl: 'lets-use-on-change.component.html',
  styleUrls: ['./lets-use-on-change.component.css']
})
export class LetsUseOnChangeComponent implements OnInit,OnChanges,AfterContentInit{


  @Input() changeVar: any;

  changes: string[] =[];

  constructor() { }

  ngOnInit(): void {
    console.log("Init Invoked!!!");
  }

  ngOnChanges(){
    this.changes.push(this.changeVar);
    console.log("change: "+this.changeVar);
  }

  ngAfterContentInit(){
    console.log("Content added!!!");
  }

}
