import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Course } from './../../models/course';
import { CourseService } from './../../services/course.service';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.css'],
})
export class AddStudentFormComponent implements OnInit {
  courses: Course[] = [];
  studentForm: FormGroup = new FormGroup({});
  firstName: FormControl = new FormControl('');
  lastName: FormControl = new FormControl('');
  currentCourse: FormControl = new FormControl('');

  constructor(
    public activeModal: NgbActiveModal,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.getCourses();
    this.initForm();
  }

  getCourses(): void {
    this.courseService.getAll().subscribe((response) => {
      this.courses = response.body;
    });
  }

  addStudent() {}

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
    this.currentCourse = new FormControl('');
    this.studentForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      currentCourse: this.currentCourse,
    });
  }
}
