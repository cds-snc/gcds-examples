import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GcdsComponentsModule } from '@cdssnc/gcds-components-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GcdsComponentsModule, FormsModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
  name: string = '';
  select: string = '';
  date: string = '';
  number: number = 0;
}
