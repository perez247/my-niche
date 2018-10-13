import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAccountFormComponent } from './social-account-form.component';

describe('SocialAccountFormComponent', () => {
  let component: SocialAccountFormComponent;
  let fixture: ComponentFixture<SocialAccountFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialAccountFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
