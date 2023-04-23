import { ChangeDetectionStrategy, Component, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentDirective } from './content.directive';

@Component({
  selector: 'app-projection-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projection-container.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush, // this won't work since expanded is modified by directive
})
export class ProjectionContainerComponent {
  expanded = false;
  @ContentChild(ContentDirective) content!: ContentDirective;
}
