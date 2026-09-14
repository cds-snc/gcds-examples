import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportABug } from './report-a-bug';

describe('ReportABug', () => {
  let component: ReportABug;
  let fixture: ComponentFixture<ReportABug>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportABug],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportABug);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
