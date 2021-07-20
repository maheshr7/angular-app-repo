import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDirComponent } from './app-dir.component';

describe('AppDirComponent', () => {
  let component: AppDirComponent;
  let fixture: ComponentFixture<AppDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
