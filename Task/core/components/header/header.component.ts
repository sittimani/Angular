import { rendererTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title : any;
  public user = false;
  constructor(public dataService:DataService) {
    
    dataService.subObs$.subscribe( x=> {
      console.log("From header obj :", x);
    })

    dataService.bhaObs$.subscribe( x=>{
      console.log("From header behave :", x)
    })
   }

  ngOnInit() : void {
    this.title = this.dataService.title;
  }

}
