import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GcdsComponentsModule } from '@cdssnc/gcds-components-angular';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GcdsComponentsModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
