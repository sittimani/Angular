import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-namealone',
  templateUrl: './namealone.component.html',
  styleUrls: ['./namealone.component.css']
})
export class NamealoneComponent implements OnInit {

  public hero_details:any;

  constructor(public heros:NameService) { }

  ngOnInit(): void {
    this.hero_details = this.heros.getHeros();
    console.log(this.hero_details);
  }

}
