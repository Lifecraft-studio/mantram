import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialPublicOfferComponent } from './initial-public-offer.component';

describe('InitialPublicOfferComponent', () => {
  let component: InitialPublicOfferComponent;
  let fixture: ComponentFixture<InitialPublicOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialPublicOfferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialPublicOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
