import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-hero-details',
  template: `
    <p>
      hero-details works!
    </p>
    <p>{{id}}</p>

    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>

    <p><a (click)="getBack()">Back To ironman</a></p>


    <p><a (click)="spiderman()">SpiderMan Component</a></p>
    <router-outlet></router-outlet>
    `,
  styles: [
  ]
})
export class HeroDetailsComponent implements OnInit {

  public id:any;

  constructor(public route:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    //this.id = parseInt(this.route.snapshot.params.name);
    this.route.paramMap.subscribe((param:ParamMap)=>{
      console.log(param);
      let a=parseInt(param.get("name") as string);
      this.id = a;
    });
  }

  goPrevious(){
    this.router.navigate(['/ironman',this.id-1]);
  }
  goNext(){
    this.router.navigate(['/ironman',this.id+1]);
  }

  getBack(){
    this.router.navigate(["../"],{relativeTo:this.route})
  }

  spiderman(){
    this.router.navigate(["spiderman"],{relativeTo:this.route});
  }
}
