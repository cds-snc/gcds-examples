import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportABugComponent } from './report-a-bug.component';

describe('ReportABugComponent', () => {
  let component: ReportABugComponent;
  let fixture: ComponentFixture<ReportABugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportABugComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportABugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
