import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolboxSettingsComponent } from './toolbox-settings.component';

describe('ToolboxSettingsComponent', () => {
  let component: ToolboxSettingsComponent;
  let fixture: ComponentFixture<ToolboxSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolboxSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolboxSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
