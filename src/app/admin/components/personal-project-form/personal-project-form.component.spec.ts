import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProjectFormComponent } from './personal-project-form.component';

describe('PersonalProjectFormComponent', () => {
  let component: PersonalProjectFormComponent;
  let fixture: ComponentFixture<PersonalProjectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalProjectFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
