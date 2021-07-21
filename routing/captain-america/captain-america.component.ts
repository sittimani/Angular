import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-captain-america',
  template: `
    <p>
      captain-america works!
    </p>
  `,
  styles: [
  ]
})
export class CaptainAmericaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('onInit Invoked');
  }

}
