import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { GcdsBreadcrumbs, GcdsBreadcrumbsItem } from '@cdssnc/gcds-components-angular';
import { Breadcrumb, BreadcrumbService } from '../../breadcrumb.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const breadcrumbService = jasmine.createSpyObj('BreadcrumbService', ['breadcrumbs']);
  const breadcrumbItems: Breadcrumb[] = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'About',
      url: '/about',
    },
    {
      title: 'Topic',
      url: '/about/topic',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {},
        },
        {
          provide: BreadcrumbService,
          useValue: breadcrumbService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have breadcrumbs', () => {
    const breadcrumb = fixture.debugElement.query(By.directive(GcdsBreadcrumbs));
    expect(breadcrumb).toBeTruthy();
  });

  it('should have navlinks', () => {
    breadcrumbService.breadcrumbs.and.callFake(() => breadcrumbItems);
    fixture.detectChanges();

    const breadcrumbs = fixture.debugElement.queryAll(By.directive(GcdsBreadcrumbsItem));
    expect(breadcrumbs?.length).toBe(3);
  });
});
