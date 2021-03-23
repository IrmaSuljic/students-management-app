import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from './../../models/student';

@Component({
  selector: 'app-courses-view',
  templateUrl: './courses-view.component.html',
  styleUrls: ['./courses-view.component.css'],
})
export class CoursesViewComponent implements OnInit {
  @Input() student: Student;
  @Output() numOfCourses = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  sendNumber() {
    this.numOfCourses.emit(this.student.courses.length);
  }
}
