import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUpdateFormTemplateComponent } from './student-update-form-template.component';

describe('StudentUpdateFormTemplateComponent', () => {
  let component: StudentUpdateFormTemplateComponent;
  let fixture: ComponentFixture<StudentUpdateFormTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentUpdateFormTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentUpdateFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
