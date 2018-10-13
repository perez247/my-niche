import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicCertificationComponent } from './public-certification.component';

describe('PublicCertificationComponent', () => {
  let component: PublicCertificationComponent;
  let fixture: ComponentFixture<PublicCertificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicCertificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
