import { TestBed } from '@angular/core/testing';

import { MycommonserviceService } from './mycommonservice.service';

describe('MycommonserviceService', () => {
  let service: MycommonserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycommonserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
