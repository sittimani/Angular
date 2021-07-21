import { Component, Input, OnInit, Output,EventEmitter, DoCheck} from '@angular/core';
@Component({
  selector: 'app-child-component',
  templateUrl:'./child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() parentData:any;

  @Output() childEvent = new EventEmitter();
  @Output() trueOrFalse = new EventEmitter();
  array = [1,2,3,4];
  obj = {
    name:"Mani",
    age:21
  }

  constructor() { }

  ngOnInit(): void {
  }
  
  startEvent(){
    this.childEvent.emit(this.array);
  }

  sendValue(){
    this.trueOrFalse.emit(true);
  }
}
