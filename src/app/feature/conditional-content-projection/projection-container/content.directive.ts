import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appContent]',
  standalone: true,
})
export class ContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {
    // With the TemplateRef, the component can render the referenced content by using either the ngTemplateOutlet directive, or with the ViewContainerRef method createEmbeddedView().
  }
}
