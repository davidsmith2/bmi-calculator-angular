import { TestBed, inject } from '@angular/core/testing';

import { BmiService } from './bmi.service';

describe('BmiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BmiService]
    });
  });

  it('should ...', inject([BmiService], (service: BmiService) => {
    expect(service).toBeTruthy();
  }));
});
