import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplacementComponent } from './replacement.component';

describe('ReplacementComponent', () => {
  let component: ReplacementComponent;
  let fixture: ComponentFixture<ReplacementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReplacementComponent]
    });
    fixture = TestBed.createComponent(ReplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
