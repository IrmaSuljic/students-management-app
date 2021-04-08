import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Course } from './../../models/course';
import { Student } from './../../models/student';
import { CourseService } from './../../services/course.service';
import { LoggerService } from './../../services/logger.service';
import { StudentService } from './../../services/student.service';

@Component({
  selector: 'app-student-update-form-reactive',
  templateUrl: './student-update-form-reactive.component.html',
  styleUrls: ['./student-update-form-reactive.component.css'],
})
export class StudentUpdateFormReactiveComponent implements OnInit {
  id: number;
  student: Student;
  courses: Course[] = [];
  studentForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  coursesFormControl: FormArray = new FormArray([]);
  currentCourse: FormControl;
  dateOfBirth: FormControl;
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private courseService: CourseService,
    private loggerService: LoggerService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getCourses();
    this.getStudent(this.id);
  }

  getStudent(id: number): void {
    this.studentService.getById(id).subscribe((response) => {
      this.student = response.body;
      this.initForm(this.student);
    });
  }

  getCourses(): void {
    this.courseService.getAll().subscribe((response) => {
      this.courses = response.body;
    });
  }

  initForm(student: Student) {
    this.firstName = new FormControl(student.firstName, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]);
    this.lastName = new FormControl(student.lastName, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]);
    this.courses.forEach((item) => {
      this.coursesFormControl.push(
        new FormControl(student.courses.find((x) => x.title === item.title))
      );
    });
    this.currentCourse = new FormControl(student.currentCourse);
    const dateOfBirth = new Date(student.dateOfBirth);
    this.dateOfBirth = new FormControl({
      year: dateOfBirth ? dateOfBirth.getFullYear() : null,
      month: dateOfBirth ? dateOfBirth.getMonth() + 1 : null,
      day: dateOfBirth ? dateOfBirth.getDate() : null,
    });
    this.studentForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      courses: this.coursesFormControl,
      currentCourse: this.currentCourse,
      dateOfBirth: this.dateOfBirth,
    });
  }

  updateStudent(id: number): void {
    console.log(this.studentForm);
    if (this.studentForm.invalid) {
      this.loggerService.error('Form is not valid!');
      return;
    }
    const updatedValues = this.studentForm.value;
    updatedValues.dateOfBirth = new Date(
      updatedValues.dateOfBirth.year,
      updatedValues.dateOfBirth.month - 1,
      updatedValues.dateOfBirth.day
    );
    updatedValues.courses = updatedValues.courses
      .map((checked, i) => (checked ? this.courses[i] : null))
      .filter((v) => v !== null);
    this.studentService
      .update({ ...this.student, ...updatedValues })
      .subscribe((response) => {
        this.loggerService.log(`Student updated - ID ${id}`);
      });
  }
}
