import { Component, inject, LOCALE_ID } from '@angular/core';
import { GcdsComponentsModule } from '@cdssnc/gcds-components-angular';
import { BreadcrumbService } from '../../breadcrumb.service';

@Component({
  selector: 'app-header',
  imports: [GcdsComponentsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected readonly currentLocale = inject(LOCALE_ID);
  protected readonly breadcrumbService = inject(BreadcrumbService);
}
