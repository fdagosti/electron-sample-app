import {Component, OnInit} from '@angular/core';
import {FsService} from 'ngx-fs';

var usb = require('usb')

@Component({
  selector: 'mu-usb',
  templateUrl: './usb.component.html',
  styleUrls: ['./usb.component.scss']
})
export class UsbComponent implements OnInit {

  constructor(private _fsService: FsService) {
  }

  ngOnInit() {
  }

  displaySomething() {
    const fs = this._fsService.fs as any;
    console.log('fs ', fs.readdir('.', (err, items) => console.log('error ', err, ' items = ', items)));
    console.log("USB ",usb);
  }

}
