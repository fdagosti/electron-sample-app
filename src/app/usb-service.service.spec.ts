import { TestBed, inject } from '@angular/core/testing';

import { UsbService } from './usb.service';

describe('UsbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsbService]
    });
  });

  it('should be created', inject([UsbService], (service: UsbService) => {
    expect(service).toBeTruthy();
  }));
});
