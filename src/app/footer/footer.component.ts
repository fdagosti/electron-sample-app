import {Component, OnInit} from '@angular/core';
import {ElectronService} from 'ngx-electron';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private _electronService: ElectronService) {
  }

  ngOnInit() {
  }

  bcg() {
    if (this._electronService.isElectronApp) {
      this._electronService.shell.openExternal('https://www.bcg.com/');
    }
  }

  mit() {
    if (this._electronService.isElectronApp) {
      this._electronService.shell.openExternal('http://opensource.org/licenses/mit-license.php');
    }
  }

}
