import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';

  constructor(public dataService:DataService){
    const test$ = new Observable(subscriber =>{
      subscriber.next("1");
      subscriber.complete()
    })
    test$.subscribe(x=>{
      console.log(x);
    },() =>{
      console.log("error!!!");
    },
    () => {
      console.log("Completed")
    });

    //subject and asObservable

    dataService.subObs$.subscribe(x=>{
      console.log("From app obj :",x);
    })

    dataService.bhaObs$.subscribe( x=>{
      console.log("From app behave :", x)
    })
  }
  addSub(){
    this.dataService.emit(10);
  }

  addBeh(){
    this.dataService.addBeh(20);
  }

  showMedifference(){
    const obs = new Observable(x=>{
      x.next(Math.random());
    })
    obs.subscribe(x=>{
      console.log("First subscriver val: "+x);
    })
    obs.subscribe(x=>{
      console.log("Second subscriver val: "+x);
    })

    const sub = new Subject()
    sub.subscribe(x=>{
      console.log("first subject call :"+x);
    })
    sub.subscribe(x=>{
      console.log("second subject call :"+x);
    })
    sub.next(Math.random());
  }
}
