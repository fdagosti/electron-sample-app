import {Component, OnInit} from '@angular/core';
import {UsbService} from '../../usb.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {TreeNode} from 'angular-tree-component';


@Component({
  selector: 'mu-usb',
  templateUrl: './usb.component.html',
  styleUrls: ['./usb.component.scss']
})
export class UsbComponent implements OnInit {

  drive$;

  loading = true;

  options = {
    getChildren: (node: TreeNode) => {
      return this.usbService.readDir(node.id);
    }
  };

  constructor(private usbService: UsbService) {
  }


  ngOnInit() {
    this.drive$ = this.usbService.getUsbDevices()
      .catch(e => console.log('ex ', e))
      .map((d) => {
        this.loading = d === 'loading' ? true : false;
        return this.loading ? [] : d;
      });

  }

}
