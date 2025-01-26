import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AerialCableComponent } from './aerial-cable.component';

describe('AerialCableComponent', () => {
  let component: AerialCableComponent;
  let fixture: ComponentFixture<AerialCableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AerialCableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AerialCableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
