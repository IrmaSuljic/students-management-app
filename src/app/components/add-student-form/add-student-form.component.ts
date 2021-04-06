import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Course } from './../../models/course';
import { CourseService } from './../../services/course.service';
import { StudentService } from './../../services/student.service';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.css'],
})
export class AddStudentFormComponent implements OnInit {
  courses: Course[] = [];
  studentForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  coursesFormControl: FormArray;
  currentCourse: FormControl;
  dateOfBirth: FormControl;
  constructor(
    public activeModal: NgbActiveModal,
    private courseService: CourseService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getAll().subscribe((response) => {
      this.courses = response.body;
      this.courses.forEach((item) => {
        item.completed = 0;
        this.coursesFormControl.push(new FormControl(false));
      });
    });
  }

  addStudent() {
    if (this.studentForm.invalid) {
      return;
    }
    let student = this.studentForm.value;
    student.dateOfBirth = new Date(
      student.dateOfBirth.year,
      student.dateOfBirth.month - 1,
      student.dateOfBirth.day
    );
    student.courses = student.courses
      .map((checked, i) => (checked ? this.courses[i] : null))
      .filter((v) => v !== null);
    this.studentService.add(student).subscribe((response) => {
      this.activeModal.close(response.body);
    });
  }

  initForm() {
    this.firstName = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]);
    this.lastName = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]);
    this.coursesFormControl = new FormArray([]);
    this.currentCourse = new FormControl('');
    this.dateOfBirth = new FormControl(null);
    this.studentForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      courses: this.coursesFormControl,
      currentCourse: this.currentCourse,
      dateOfBirth: this.dateOfBirth,
    });
  }
}
