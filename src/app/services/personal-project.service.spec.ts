import { TestBed, inject } from '@angular/core/testing';

import { PersonalProjectService } from './personal-project.service';

describe('PersonalProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonalProjectService]
    });
  });

  it('should be created', inject([PersonalProjectService], (service: PersonalProjectService) => {
    expect(service).toBeTruthy();
  }));
});
