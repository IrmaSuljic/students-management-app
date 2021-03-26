import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { students } from './../../constants';
import { Student } from './../../models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {
  id: number;
  student: Student;
  students = students;
  showCourses: boolean = false;
  numOfCourses: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    //   this.id = params['id'];
    // });
    this.id = this.route.snapshot.params.id;
    this.getStudent(this.id);
  }

  getStudent(id: number): void {
    this.student = this.students[id - 1];
  }

  setNumber(numOfCourses: number) {
    this.numOfCourses = numOfCourses;
  }
}
