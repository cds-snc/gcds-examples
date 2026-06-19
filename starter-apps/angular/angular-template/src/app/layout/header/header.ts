import { Component, inject, LOCALE_ID } from '@angular/core';
import { GcdsComponentsModule } from '@cdssnc/gcds-components-angular';
import { BreadcrumbService } from '../../breadcrumb.service';

@Component({
  selector: 'app-header',
  imports: [GcdsComponentsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly currentLocale = inject(LOCALE_ID);
  protected readonly breadcrumbService = inject(BreadcrumbService);
}
