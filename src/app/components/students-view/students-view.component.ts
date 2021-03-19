import { Component, OnInit } from '@angular/core';
import { Student } from './../../models/student';

@Component({
  selector: 'app-students-view',
  templateUrl: './students-view.component.html',
  styleUrls: ['./students-view.component.css'],
})
export class StudentsViewComponent implements OnInit {
  student: Student;
  numOfCourses: number;
  constructor() {}

  ngOnInit(): void {
    this.student = {
      firstName: 'Irma',
      lastName: 'Suljic',
      courses: ['HTML', 'CSS', 'Angular'],
    };
  }

  setNumber(numOfCourses: number) {
    this.numOfCourses = numOfCourses;
  }
}
