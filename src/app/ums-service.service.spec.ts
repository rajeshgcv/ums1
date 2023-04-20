import { TestBed } from '@angular/core/testing';

import { UmsServiceService } from './ums-service.service';

describe('UmsServiceService', () => {
  let service: UmsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UmsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
