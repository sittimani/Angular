import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  public name="";

  constructor() { }

  ngOnInit(): void {
    console.log();
  }

  changeName(){
    new DataService().name="mani";
  }
}
