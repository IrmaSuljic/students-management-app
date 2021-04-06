import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StudentUpdateFormTemplateComponent } from './student-update-form-template.component';

describe('StudentUpdateFormTemplateComponent', () => {
  let component: StudentUpdateFormTemplateComponent;
  let fixture: ComponentFixture<StudentUpdateFormTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [StudentUpdateFormTemplateComponent],
    }).compileComponents();
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
