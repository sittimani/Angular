import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html'
})
export class CatagoryComponent{
  public name:any;
  constructor(data:DataService) { 
    this.name=data.name;
  }
}
