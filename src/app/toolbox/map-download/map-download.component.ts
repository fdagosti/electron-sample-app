import {Component, OnInit} from '@angular/core';
import {TomTomService} from '../../tom-tom.service';
import {ElectronService} from 'ngx-electron';


@Component({
  selector: 'mu-map-download',
  templateUrl: './map-download.component.html',
  styleUrls: ['./map-download.component.scss']
})
export class MapDownloadComponent implements OnInit {


  constructor(private ttService: TomTomService, private _electronService: ElectronService) {
  }

  ngOnInit() {
  }

  download() {
    console.log('electron service ', this._electronService);
    //this.ttService.downloadMap().subscribe(data => console.log("retrieved data ",data));
  }

  open() {
    const options = {
      filters: [
        {name: 'Javascript', extensions: ['js', 'jsx']},
        {name: 'All Files', extensions: ['*']}
      ],
      properties: [
        'openFile',
        'openDirectory',
        'multiSelections'
      ]
    };


    this._electronService.remote.dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']}, paths => {
      console.log(`the user selected the following path:  ${paths[0]}`);
    });
  }

}
