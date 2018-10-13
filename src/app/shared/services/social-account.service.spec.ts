import { TestBed, inject } from '@angular/core/testing';

import { SocialAccountService } from './social-account.service';

describe('SocialAccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialAccountService]
    });
  });

  it('should be created', inject([SocialAccountService], (service: SocialAccountService) => {
    expect(service).toBeTruthy();
  }));
});
