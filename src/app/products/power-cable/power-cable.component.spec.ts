import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerCableComponent } from './power-cable.component';

describe('PowerCableComponent', () => {
  let component: PowerCableComponent;
  let fixture: ComponentFixture<PowerCableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerCableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerCableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
