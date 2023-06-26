import { TestBed } from '@angular/core/testing';

import { GmapService } from './gmap.service';

describe('GmapService', () => {
  let service: GmapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GmapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
