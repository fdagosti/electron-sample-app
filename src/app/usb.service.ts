import {Injectable, NgZone} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {FsService} from 'ngx-fs';

const w = window as any;
const usb = w.require('usb');
const drivelist = w.require('drivelist');

@Injectable()
export class UsbService {


  constructor(private _fsService: FsService, private zone: NgZone) {
  }

  private listAllUSBDevices() {
    return new Promise((resolve, reject) => {


      drivelist.list((error, drives) => {
        if (error) {
          reject(error);
        } else {
          resolve(drives);
        }
      });

    }).then((drives: any) => {
      const usbDrives = drives.filter(d => d.busType === 'USB').map(d => this.readDrive(d));
      return Promise.all(usbDrives);
    });


  }

  public readDir(path) {
    return new Promise((resolve, reject) => {
      const fs = this._fsService.fs as any;
      return fs.readdir(path, (err, files) => {
        if (err) {
          reject(err);
        } else {
          resolve(
            files.map(file => {
              const filePath = path + '/' + file;
              const stats = fs.statSync(filePath);
              return {
                id: filePath,
                name: file,
                hasChildren: stats.isDirectory()
              };
            })
          );
        }
      });
    });
  }

  private readDrive(drive) {
    const path = drive.mountpoints[0].path;
    return this.readDir(path)
      .then(data => ({
          drive: drive,
          content: data
        }
      ));
  }

  getUsbDevices() {
    return Observable.create(observer => {
      const zoneNext = (data) => this.zone.run(() => observer.next(data));

      this.listAllUSBDevices().then(zoneNext);

      usb.on('attach', () => {
        zoneNext("loading");
        setTimeout(() => {
          this.listAllUSBDevices().then(zoneNext);
        }, 5000);
      });

      usb.on('detach', () => {
        this.listAllUSBDevices().then(zoneNext);
      });
      return () => {
        usb.removeAllListeners('attach');
        usb.removeAllListeners('detach');
      };
    });

  }

}
