import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-iron-man',
  template: `
    <p>
      iron-man works!
    </p>
    <ul>
      <li (click)="onSelect(hero)" *ngFor="let hero of Heros">
        <span>{{hero.id}} {{hero.name}}</span>
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class IronManComponent implements OnInit {

  Heros = [
    {"id":1,"name":"Iron Man"},
    {"id":2,"name":"Captain America"},
    {"id":3,"name":"Thor"},
  ];
  constructor(public router:Router, public route:ActivatedRoute) { }


  ngOnInit(): void {
    console.log('onInit Invoked');
  }

  onSelect(hero:any){
     // this.router.navigate(["/ironman",hero.id]);
      this.router.navigate([hero.id],{relativeTo:this.route})
  }

}
