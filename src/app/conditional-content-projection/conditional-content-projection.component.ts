import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-conditional-content-projection',
  templateUrl: './conditional-content-projection.component.html',
  styleUrls: ['./conditional-content-projection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConditionalContentProjectionComponent {}
