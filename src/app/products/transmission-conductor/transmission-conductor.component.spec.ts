import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmissionConductorComponent } from './transmission-conductor.component';

describe('TransmissionConductorComponent', () => {
  let component: TransmissionConductorComponent;
  let fixture: ComponentFixture<TransmissionConductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransmissionConductorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransmissionConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
