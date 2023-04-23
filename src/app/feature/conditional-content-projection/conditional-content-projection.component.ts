import { ContentDirective } from './projection-container/content.directive';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectionContainerComponent } from './projection-container/projection-container.component';
import { ContentToggleDirective } from './projection-container/content-toggle.directive';

@Component({
  selector: 'app-conditional-content-projection',
  templateUrl: './conditional-content-projection.component.html',
  styleUrls: ['./conditional-content-projection.component.scss'],
  imports: [CommonModule, ProjectionContainerComponent, ContentToggleDirective, ContentDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ConditionalContentProjectionComponent {}
