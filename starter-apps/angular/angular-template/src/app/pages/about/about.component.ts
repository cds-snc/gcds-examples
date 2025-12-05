import { Component } from '@angular/core';
import { GcdsComponentsModule } from '@cdssnc/gcds-components-angular';

@Component({
  selector: 'app-about',
  imports: [GcdsComponentsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
