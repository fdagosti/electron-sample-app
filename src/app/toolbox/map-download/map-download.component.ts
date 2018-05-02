import { Component, OnInit } from '@angular/core';
import {TomTomService} from '../../tom-tom.service';
import {ElectronService} from 'ngx-electron';

@Component({
  selector: 'mu-map-download',
  templateUrl: './map-download.component.html',
  styleUrls: ['./map-download.component.scss']
})
export class MapDownloadComponent implements OnInit {




  constructor(private ttService: TomTomService, private _electronService: ElectronService) { }

  ngOnInit() {
  }

  download(){
    console.log("electron service ",this._electronService)
    //this.ttService.downloadMap().subscribe(data => console.log("retrieved data ",data));
  }

}
