import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFontAwesomeComponent } from './ngx-font-awesome.component';

describe('NgxFontAwesomeComponent', () => {
  let component: NgxFontAwesomeComponent;
  let fixture: ComponentFixture<NgxFontAwesomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFontAwesomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFontAwesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
