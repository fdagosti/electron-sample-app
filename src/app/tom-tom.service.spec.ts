import { TestBed, inject } from '@angular/core/testing';

import { TomTomService } from './tom-tom.service';

describe('TomTomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TomTomService]
    });
  });

  it('should be created', inject([TomTomService], (service: TomTomService) => {
    expect(service).toBeTruthy();
  }));
});
