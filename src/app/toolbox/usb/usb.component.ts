import {Component, OnDestroy, OnInit} from '@angular/core';
import {FsService} from 'ngx-fs';
import {UsbService} from "../../usb.service";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import {TreeNode} from "angular-tree-component";


@Component({
  selector: 'mu-usb',
  templateUrl: './usb.component.html',
  styleUrls: ['./usb.component.scss']
})
export class UsbComponent implements OnInit {

  drives;

  loading = true;

  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        {id: 2, name: 'child1'},
        {id: 3, name: 'child2'}
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        {id: 5, name: 'child2.1'},
        {
          id: 6,
          name: 'child2.2',
          children: [
            {id: 7, name: 'subsub'}
          ]
        }
      ]
    }
  ];
  options = {
    getChildren: (node: TreeNode) => {
      return this.usbService.readDir(node.id);
    }
  };

  constructor(private usbService: UsbService) {
  }


  ngOnInit() {
    this.drives = this.usbService.getUsbDevices()
      .do(() => this.loading = false);

  }

}
