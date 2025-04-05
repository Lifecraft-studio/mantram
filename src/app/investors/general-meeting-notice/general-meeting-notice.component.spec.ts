import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralMeetingNoticeComponent } from './general-meeting-notice.component';

describe('GeneralMeetingNoticeComponent', () => {
  let component: GeneralMeetingNoticeComponent;
  let fixture: ComponentFixture<GeneralMeetingNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralMeetingNoticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralMeetingNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
