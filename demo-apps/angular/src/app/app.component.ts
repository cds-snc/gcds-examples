import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GcdsComponentsModule } from '@cdssnc/gcds-components-angular';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GcdsComponentsModule, FormsModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'angular-app';
  firstName = 'Ada';
  lastName = 'Lovelace';

  packageOptions = [
    {
      id: 'web-components',
      label: 'Web Components',
      value: 'web-components',
      checked: false,
      hint: 'If you are are using gcds-components'
    },
    {
      id: 'angular',
      label: 'Angular',
      value: 'web-components',
      checked: false,
      hint: 'If you are using gcds-components-angular'
    }
  ];
  selectedPackage = '';
  formEmail: '' | undefined;

  onSubmit() {
    console.log('Form submitted');
    // Add your custom logic here
  }
}
