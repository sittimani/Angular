import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';
import { EmailValidator } from 'src/app/Validators/email.validator';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
 
  details:any = [];
  message:string = '';
  showMessage = false;
  searchKey = "";
  isSearchUsed = false;
  indexArray = [];


  constructor(private db:DbService, private router:Router) {   }

  ngOnInit(): void {
    this.details = this.db.array;
   
    this.db.subjectObs$.subscribe(x=>{
      this.message = x;
      this.showMessage = true;
    })

    setTimeout(() => {
      this.db.sendMessage("");
    }, 10000);
  }

  

  updateUser(index:any){
    if(this.isSearchUsed){
      this.db.triggerSubsciber(this.indexArray[index]);
    }else{
      this.db.triggerSubsciber(index);
    }
    this.router.navigate(['service/update',index])
  }

  deleteUser(indexToDelete:any){
    this.db.deleteUserFromArray(indexToDelete);
  }

  ascending(value:string):any{
    function compare( a:any, b:any ) {
      let name = value;
      if ( a[name] < b[name] ){
        return -1;
      }
      if ( a[name] > b[name] ){
        return 1;
      }
      return 0;
    }
    this.db.array.sort(compare);
  }

  decending(value:string):any{
    let name = value;
    function compare( a:any, b:any ) {
      console.log(name);
      if ( a[name] > b[name] ){
        return -1;
      }
      if ( a[name] < b[name] ){
        return 1;
      }
      return 0;
    }
    
    this.db.array.sort(compare);
  }


  searchData(){
    this.isSearchUsed = true;
    this.details = [];
    this.db.array.forEach((element,index)=> {
      if(element.firstName === this.searchKey ){
        this.details.push(element);
        this.indexArray.push(index);
      }
    });
    if(this.searchKey === ""){
      this.details = this.db.array;
      this.isSearchUsed = false;
    }
  }
}
