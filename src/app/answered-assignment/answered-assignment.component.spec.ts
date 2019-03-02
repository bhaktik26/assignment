import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsweredAssignmentComponent } from './answered-assignment.component';

describe('AnsweredAssignmentComponent', () => {
  let component: AnsweredAssignmentComponent;
  let fixture: ComponentFixture<AnsweredAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnsweredAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnsweredAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
