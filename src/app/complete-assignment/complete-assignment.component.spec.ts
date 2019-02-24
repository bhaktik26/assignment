import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteAssignmentComponent } from './complete-assignment.component';

describe('CompleteAssignmentComponent', () => {
  let component: CompleteAssignmentComponent;
  let fixture: ComponentFixture<CompleteAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
