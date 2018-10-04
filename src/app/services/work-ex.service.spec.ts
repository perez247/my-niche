import { TestBed, inject } from '@angular/core/testing';

import { WorkExService } from './work-ex.service';

describe('WorkExService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkExService]
    });
  });

  it('should be created', inject([WorkExService], (service: WorkExService) => {
    expect(service).toBeTruthy();
  }));
});
