import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor() { 
    
  }
  getHeros(){
    const heros = [
      {"name":"Stark","knownAs":"Iron Man"},
      {"name":"Steve","knownAs":"Captain America"},
      {"name":"Natasha","knownAs":"Block Widow"},
      {"name":"Bruse","knownAs":"Hulk"}
    ];
    return heros;
  }
}
