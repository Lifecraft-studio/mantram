import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateAnnouncementComponent } from './corporate-announcement.component';

describe('CorporateAnnouncementComponent', () => {
  let component: CorporateAnnouncementComponent;
  let fixture: ComponentFixture<CorporateAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporateAnnouncementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
