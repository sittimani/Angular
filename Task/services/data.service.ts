import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public author = "Manikandan";
  public title = "TestSite"

  private sub!: Subject<any>;
  subObs$!: Observable<any>;
  private bha!: BehaviorSubject<any>;
  bhaObs$!: Observable<any>;
 
  constructor() {
    this.sub = new Subject();
    this.subObs$ = this.sub.asObservable();
    this.bha = new BehaviorSubject(100);
    this.bhaObs$ = this.bha.asObservable();
  }

  emit(nx: any){
    this.sub.next(nx);
  }  

  addBeh(x: any){
    this.bha.next(x);
  }
}
