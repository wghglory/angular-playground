import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalContentProjectionComponent } from './conditional-content-projection.component';

describe('ConditionalContentProjectionComponent', () => {
  let component: ConditionalContentProjectionComponent;
  let fixture: ComponentFixture<ConditionalContentProjectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConditionalContentProjectionComponent],
    });
    fixture = TestBed.createComponent(ConditionalContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
