import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GcdsComponentsModule } from '@gcds-core/components-angular';

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
