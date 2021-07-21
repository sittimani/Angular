import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  template: `
    <p>
      page not found!!!
    </p>
  `,
  styles: [
  ]
})
export class PagenotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('onInit Invoked');
  }

}
