import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { GcdsComponentsModule } from '/Users/daine-rosetrinidad/projects/gcds/gcds-components/packages/angular/';
// import { GcdsComponentsModule } from '/Users/daine-rosetrinidad/projects/gcds/gcds-components/packages/angular/dist/'
import { GcdsComponentsModule } from '@cdssnc/gcds-components-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GcdsComponentsModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
}
