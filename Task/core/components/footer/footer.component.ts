import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public author:any;

  constructor(public data:DataService) { }

  ngOnInit(): void {
    this.author = this.data.author
  }

}
