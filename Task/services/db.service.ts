import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  array:any = [
    {
      firstName: "mani",
      lastName: "kandan",
      gender: "Male",
      age: "21",
      email: "mani@gmail.com"
    },
    {
      firstName: "abi",
      lastName: "musiri",
      gender: "Female",
      age: "21",
      email: "manikandan@gmail.com"
    }
  ];

  private behaviorSubject:BehaviorSubject<number>
  behaviorSubjectObs$:Observable<number>

  private subject:BehaviorSubject<string>
  subjectObs$:Observable<string>

  constructor() {
    this.behaviorSubject = new BehaviorSubject(-1);
    this.behaviorSubjectObs$ = this.behaviorSubject.asObservable();

    this.subject = new BehaviorSubject("");
    this.subjectObs$ = this.subject.asObservable();
  }

  addValue(value:any){
    this.array.push(value);
  }

  deleteUserFromArray(indexToDelete:number){
    this.array.forEach((element: any,index: number)=>{
      if(index == indexToDelete){
        this.array.splice(indexToDelete,1);
      }
    });
  }

  // for updating user 
  triggerSubsciber(index:number){
    this.behaviorSubject.next(index);
  }

  // for sending message
  sendMessage(value:string){
    this.subject.next(value);
  }
}
