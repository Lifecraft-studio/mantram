import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionOfBoardAndCommitteeComponent } from './composition-of-board-and-committee.component';

describe('CompositionOfBoardAndCommitteeComponent', () => {
  let component: CompositionOfBoardAndCommitteeComponent;
  let fixture: ComponentFixture<CompositionOfBoardAndCommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompositionOfBoardAndCommitteeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompositionOfBoardAndCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
