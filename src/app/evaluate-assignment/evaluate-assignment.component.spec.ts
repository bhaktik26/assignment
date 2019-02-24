import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateAssignmentComponent } from './evaluate-assignment.component';

describe('EvaluateAssignmentComponent', () => {
  let component: EvaluateAssignmentComponent;
  let fixture: ComponentFixture<EvaluateAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluateAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
