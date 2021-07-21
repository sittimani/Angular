import { Component, Input, OnInit,  } from '@angular/core';
import { ShareDataService } from 'src/app/share-data.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  @Input() data:any;

  public val:any;
  constructor(public _name:ShareDataService) {
    this.val = _name.getName();
  }
  
  ngOnInit(): void {
  }

  changeName(){
    this._name.setName("Manikandan");
    this.val = this._name.getName();
  
    
  }

}
