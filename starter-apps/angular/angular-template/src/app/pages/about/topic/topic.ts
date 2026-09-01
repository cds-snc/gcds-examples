import { Component } from '@angular/core';
import { GcdsComponentsModule } from '@gcds-core/components-angular';

@Component({
  selector: 'app-topic',
  imports: [GcdsComponentsModule],
  templateUrl: './topic.html',
  styleUrl: './topic.scss',
})
export class Topic {}
