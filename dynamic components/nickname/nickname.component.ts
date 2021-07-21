import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-nickname',
  templateUrl: './nickname.component.html',
  styleUrls: ['./nickname.component.css']
})
export class NicknameComponent implements OnInit {

  hero_details:any;

  constructor(public heros:NameService) { }

  ngOnInit(): void {
    this.hero_details = this.heros.getHeros();
  }
}
