import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GcdsComponentsModule } from '@cdssnc/gcds-components-angular';

@Component({
  selector: 'app-report-a-bug',
  imports: [GcdsComponentsModule, ReactiveFormsModule],
  templateUrl: './report-a-bug.component.html',
  styleUrl: './report-a-bug.component.scss',
})
export class ReportABugComponent {
  protected readonly submitted = signal(false);
  protected readonly issueUrl = signal(
    'https://github.com/cds-snc/gcds-components/issues/new'
  );

  protected readonly formGroup = new FormGroup({
    version: new FormControl<string | null>(null),
    title: new FormControl<string | null>(null),
    currentBehavior: new FormControl<string | null>(null),
    expectedBehavior: new FormControl<string | null>(null),
    systemInfo: new FormControl<string | null>(null),
    stepsToReproduce: new FormControl<string | null>(null),
    codeReproductionUrl: new FormControl<string | null>(null),
    additionalInfo: new FormControl<string | null>(null),
  });

  public onSubmit() {
    if (this.formGroup.valid) {
      this.submitted.set(true);
      this.issueUrl.set(
        `https://github.com/cds-snc/gcds-components/issues/new` +
          `?=&template=bug_report.yml` +
          `&title=${this.formGroup.value.title}` +
          `&package_version=${this.formGroup.value.version}` +
          `&current_behavior=${this.formGroup.value.currentBehavior}` +
          `&expected_behavior=${this.formGroup.value.expectedBehavior}` +
          `&sys_info=${this.formGroup.value.systemInfo}` +
          `&steps_to_reproduce=${this.formGroup.value.stepsToReproduce}` +
          `&code_url=${this.formGroup.value.codeReproductionUrl}` +
          `&more_info=${this.formGroup.value.additionalInfo}`
      );
    }
  }
}
