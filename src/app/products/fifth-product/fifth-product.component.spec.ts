import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthProductComponent } from './fifth-product.component';

describe('FifthProductComponent', () => {
  let component: FifthProductComponent;
  let fixture: ComponentFixture<FifthProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FifthProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifthProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
