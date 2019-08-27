import { TestBed } from '@angular/core/testing';

import { NgxFontAwesomeService } from './ngx-font-awesome.service';

describe('NgxFontAwesomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxFontAwesomeService = TestBed.get(NgxFontAwesomeService);
    expect(service).toBeTruthy();
  });
});
