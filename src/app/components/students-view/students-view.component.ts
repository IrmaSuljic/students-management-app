import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { students } from 'src/app/constants';
import { Student } from './../../models/student';

@Component({
  selector: 'app-students-view',
  templateUrl: './students-view.component.html',
  styleUrls: ['./students-view.component.css'],
})
export class StudentsViewComponent implements OnInit {
  students: Student[] = [];
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.students = students;
  }

  goToDetails(id: number): void {
    this.route.navigate(['/student-details', id]);
  }
}
