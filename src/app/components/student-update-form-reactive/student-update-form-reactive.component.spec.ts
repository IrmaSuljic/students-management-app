import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUpdateFormReactiveComponent } from './student-update-form-reactive.component';

describe('StudentUpdateFormReactiveComponent', () => {
  let component: StudentUpdateFormReactiveComponent;
  let fixture: ComponentFixture<StudentUpdateFormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentUpdateFormReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentUpdateFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
