import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-courses-view',
  templateUrl: './courses-view.component.html',
  styleUrls: ['./courses-view.component.css'],
})
export class CoursesViewComponent implements OnInit {
  @Input() firstName: string;
  @Input() courses: string[];
  @Output() numOfCourses = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  sendNumber() {
    this.numOfCourses.emit(this.courses.length);
  }
}
