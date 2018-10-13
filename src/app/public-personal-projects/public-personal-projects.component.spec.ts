import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPersonalProjectsComponent } from './public-personal-projects.component';

describe('PublicPersonalProjectsComponent', () => {
  let component: PublicPersonalProjectsComponent;
  let fixture: ComponentFixture<PublicPersonalProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicPersonalProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicPersonalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
