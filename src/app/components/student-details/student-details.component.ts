import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from './../../models/student';
import { LoggerService } from './../../services/logger.service';
import { StudentService } from './../../services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {
  id: number;
  student: Student;
  showCourses: boolean = false;
  numOfCourses: number;
  errorMsg: string;
  constructor(
    private route: ActivatedRoute,
    private loggerService: LoggerService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getStudent(this.id);
    this.loggerService.log(`Student Details - ID ${this.id}`);
  }

  getStudent(id: number): void {
    this.studentService.getById(id).subscribe(
      (response) => {
        this.student = response.body;
      },
      () => {
        this.errorMsg = `Student Not Found - ID ${this.id}`;
        this.loggerService.error(this.errorMsg);
      },
      () => {
        this.loggerService.log('Getting student by ID completed');
      }
    );
  }

  setNumber(numOfCourses: number) {
    this.numOfCourses = numOfCourses;
  }
}
