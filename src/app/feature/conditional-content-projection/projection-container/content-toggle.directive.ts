import { Directive, HostBinding, HostListener } from '@angular/core';
import { ProjectionContainerComponent } from './projection-container.component';

@Directive({
  selector: '[appContentToggle]',
  standalone: true,
})
export class ContentToggleDirective {
  constructor(public container: ProjectionContainerComponent) {}

  @HostBinding('attr.aria-expanded') ariaExpanded = this.container.expanded;

  @HostListener('click') toggleContent() {
    this.container.expanded = !this.container.expanded;
  }
}
