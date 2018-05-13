import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mu-loading-spinner',
  template: `<div class="sk-rotating-plane"></div>`,
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
