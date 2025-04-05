import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialityPolicyComponent } from './materiality-policy.component';

describe('MaterialityPolicyComponent', () => {
  let component: MaterialityPolicyComponent;
  let fixture: ComponentFixture<MaterialityPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialityPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialityPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
