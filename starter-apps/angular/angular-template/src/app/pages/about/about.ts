import { Component } from '@angular/core';
import { GcdsComponentsModule } from '@gcds-core/components-angular';

@Component({
  selector: 'app-about',
  imports: [GcdsComponentsModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
