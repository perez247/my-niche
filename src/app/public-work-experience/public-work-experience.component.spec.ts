import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicWorkExperienceComponent } from './public-work-experience.component';

describe('PublicWorkExperienceComponent', () => {
  let component: PublicWorkExperienceComponent;
  let fixture: ComponentFixture<PublicWorkExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicWorkExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicWorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
