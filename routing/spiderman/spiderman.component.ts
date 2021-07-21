import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spiderman',
  template: `
    <p>
      spiderman works!
    </p>
  `,
  styles: [
  ]
})
export class SpidermanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('onInit Invoked');
  }

}
