import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './../../models/course';
import { Student } from './../../models/student';
import { CourseService } from './../../services/course.service';
import { LoggerService } from './../../services/logger.service';
import { StudentService } from './../../services/student.service';

@Component({
  selector: 'app-student-update-form-template',
  templateUrl: './student-update-form-template.component.html',
  styleUrls: ['./student-update-form-template.component.css'],
})
export class StudentUpdateFormTemplateComponent implements OnInit {
  @ViewChild('updateForm') updateForm;
  id: number;
  student: Student;
  courses: Course[] = [];
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private courseService: CourseService,
    private loggerService: LoggerService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getStudent(this.id);
    this.getCourses();
  }

  getStudent(id: number): void {
    this.studentService.getById(id).subscribe((response) => {
      this.student = response.body;
    });
  }

  getCourses(): void {
    this.courseService.getAll().subscribe((response) => {
      this.courses = response.body;
    });
  }

  updateStudent(id: number): void {
    console.log(this.updateForm.form);
    if (this.updateForm.form.invalid) {
      this.loggerService.error('Form is not valid!');
      return;
    }
    const updatedValues = this.updateForm.form.value;
    this.studentService
      .update({ ...this.student, ...updatedValues })
      .subscribe((response) => {
        this.loggerService.log(`Student updated - ID ${id}`);
      });
  }
}
