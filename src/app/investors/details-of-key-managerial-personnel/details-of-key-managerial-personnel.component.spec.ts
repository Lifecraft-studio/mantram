import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfKeyManagerialPersonnelComponent } from './details-of-key-managerial-personnel.component';

describe('DetailsOfKeyManagerialPersonnelComponent', () => {
  let component: DetailsOfKeyManagerialPersonnelComponent;
  let fixture: ComponentFixture<DetailsOfKeyManagerialPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsOfKeyManagerialPersonnelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsOfKeyManagerialPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
