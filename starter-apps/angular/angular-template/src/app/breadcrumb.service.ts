import { inject, Injectable, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

export interface Breadcrumb {
  title: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  protected readonly router = inject(Router);
  protected readonly activatedRoute = inject(ActivatedRoute);

  public readonly breadcrumbs = signal<Breadcrumb[]>([]);

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() =>
        this.breadcrumbs.set(this.buildBreadcrumb(this.activatedRoute.root, []))
      );
  }

  private buildBreadcrumb(
    route: ActivatedRoute,
    crumbs: Breadcrumb[],
    url = ''
  ): Breadcrumb[] {
    if (route.snapshot.title && route.snapshot.routeConfig?.title) {
      url += `/${route.snapshot.url.toString()}`;
      crumbs.push({ title: route.snapshot.title, url });
    }

    if (!route.firstChild) {
      return crumbs;
    }

    return this.buildBreadcrumb(route.firstChild, crumbs, url);
  }
}
