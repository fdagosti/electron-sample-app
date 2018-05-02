import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IviComponent } from './ivi.component';

describe('IviComponent', () => {
  let component: IviComponent;
  let fixture: ComponentFixture<IviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
