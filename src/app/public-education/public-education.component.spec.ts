import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicEducationComponent } from './public-education.component';

describe('PublicEducationComponent', () => {
  let component: PublicEducationComponent;
  let fixture: ComponentFixture<PublicEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
