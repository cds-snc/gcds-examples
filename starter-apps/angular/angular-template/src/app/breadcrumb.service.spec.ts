import { TestBed } from '@angular/core/testing';

import { Component } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BreadcrumbService } from './breadcrumb.service';

@Component({ template: '' })
class DummyComponent {}

const TEST_ROUTES: Routes = [
  {
    path: 'about',
    component: DummyComponent,
    title: 'About',
    children: [
      {
        path: 'topic',
        title: 'Topic',
        component: DummyComponent,
      },
    ],
  },
];

describe('BreadcrumbService', () => {
  let service: BreadcrumbService;
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [BreadcrumbService, provideRouter(TEST_ROUTES)],
    });

    harness = await RouterTestingHarness.create();
    service = TestBed.inject(BreadcrumbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate correct breadcrumb for /about/topic', async () => {
    await harness.navigateByUrl('/about/topic');

    expect(service.breadcrumbs()).toEqual([
      { title: 'About', url: '/about' },
      { title: 'Topic', url: '/about/topic' },
    ]);
  });
});
