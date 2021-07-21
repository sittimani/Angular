import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  public name:any;

  constructor(public data:DataService) { }

  ngOnInit(): void {
    this.name = this.data.author;
  }

}
