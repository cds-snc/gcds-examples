import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GcdsComponentsModule } from '@cdssnc/gcds-components-angular';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GcdsComponentsModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
