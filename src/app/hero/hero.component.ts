import { Component, OnInit } from '@angular/core';
import {ElectronService} from 'ngx-electron';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(private _electronService: ElectronService) { }

  ngOnInit() {
  }

  isnativeApp(){
    return this._electronService.isElectronApp;
  }

}
