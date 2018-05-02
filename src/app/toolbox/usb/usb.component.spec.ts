import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsbComponent } from './usb.component';

describe('UsbComponent', () => {
  let component: UsbComponent;
  let fixture: ComponentFixture<UsbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
