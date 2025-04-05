import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesAndCodesOfConductComponent } from './policies-and-codes-of-conduct.component';

describe('PoliciesAndCodesOfConductComponent', () => {
  let component: PoliciesAndCodesOfConductComponent;
  let fixture: ComponentFixture<PoliciesAndCodesOfConductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliciesAndCodesOfConductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliciesAndCodesOfConductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
