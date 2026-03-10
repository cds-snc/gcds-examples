import { Component } from '@angular/core';
import { GcdsComponentsModule } from '@cdssnc/gcds-components-angular';

@Component({
  selector: 'app-home',
  imports: [GcdsComponentsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
