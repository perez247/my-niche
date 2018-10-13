import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSkillsComponent } from './public-skills.component';

describe('PublicSkillsComponent', () => {
  let component: PublicSkillsComponent;
  let fixture: ComponentFixture<PublicSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
