import { Component } from '@angular/core';
import { GcdsComponentsModule } from '@cdssnc/gcds-components-angular';

@Component({
  selector: 'app-topic',
  imports: [GcdsComponentsModule],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.scss',
})
export class TopicComponent {}
