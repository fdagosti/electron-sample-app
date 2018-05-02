import { Component, OnInit } from '@angular/core';
import {TomTomService} from '../../tom-tom.service';

@Component({
  selector: 'mu-toolbox-settings',
  templateUrl: './toolbox-settings.component.html',
  styleUrls: ['./toolbox-settings.component.scss']
})
export class ToolboxSettingsComponent implements OnInit {

  constructor(private ttService: TomTomService) { }

  ngOnInit() {
  }

  apiUrl(){
    return this.ttService.apiUrl();
  }

}
