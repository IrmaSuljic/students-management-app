import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from './../../models/student';

@Component({
  selector: 'app-students-view',
  templateUrl: './students-view.component.html',
  styleUrls: ['./students-view.component.css'],
})
export class StudentsViewComponent implements OnInit {
  students: Student[] = [];
  numOfCourses: number;
  showCourses: boolean = false;
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.students = [
      {
        firstName: 'Irma',
        lastName: 'Suljic',
        courses: [
          { title: 'HTML', completed: 8 },
          { title: 'CSS', completed: 4 },
          { title: 'Angular', completed: 0 },
        ],
        currentCourse: 'HTML',
      },
      {
        firstName: 'Mujo',
        lastName: 'Mujic',
        courses: [
          { title: 'HTML', completed: 8 },
          { title: 'HTML', completed: 8 },
          { title: 'ReactJS', completed: 8 },
        ],
        currentCourse: 'ReactJS',
      },
      {
        firstName: 'Ivo',
        lastName: 'Ivic',
        courses: [
          { title: 'HTML', completed: 8 },
          { title: 'HTML', completed: 8 },
          { title: 'ReactJS', completed: 8 },
        ],
        currentCourse: 'CSS',
      },
    ];
  }

  goToDetails(id: number): void {
    this.route.navigate(['/student-details', id]);
  }

  setNumber(numOfCourses: number) {
    this.numOfCourses = numOfCourses;
  }
}
