import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TestComponent } from '../component/test/test.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<TestComponent> {
  canDeactivate(
    component: TestComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(component.name!== ""){
      return window.confirm("Some data's are unsaved!!! Are you sure, you want to close ???")
    }else{
      return false;
    }
  }
  
}
