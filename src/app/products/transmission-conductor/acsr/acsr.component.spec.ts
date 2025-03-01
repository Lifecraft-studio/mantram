import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcsrComponent } from './acsr.component';

describe('AcsrComponent', () => {
  let component: AcsrComponent;
  let fixture: ComponentFixture<AcsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcsrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
