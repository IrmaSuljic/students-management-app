import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from './../../models/student';
import { StudentService } from './../../services/student.service';

@Component({
  selector: 'app-students-view',
  templateUrl: './students-view.component.html',
  styleUrls: ['./students-view.component.css'],
})
export class StudentsViewComponent implements OnInit {
  students: Student[] = [];
  constructor(private route: Router, private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getAll().subscribe((response) => {
      this.students = response.body;
    });
  }

  addStudent(): void {
    const student = {
      id: 5,
      firstName: 'Niko',
      lastName: 'Nikic',
      courses: [
        { title: 'HTML', completed: 8 },
        { title: 'CSS', completed: 8 },
        { title: 'Angular', completed: 4 },
      ],
      currentCourse: 'Angular',
      dateOfBirth:
        'Mon Dec 19 1988 00:00:00 GMT+0100 (Central European Standard Time)',
    };
    this.studentService.add(student).subscribe((response) => {
      this.students.push(response.body);
    });
  }

  updateStudent(id: number): void {
    let student = this.students.find((x) => x.id === id);
    student.lastName = 'Doe';
    this.studentService.update(student).subscribe((response) => {
      this.students = this.students.filter((x) => x.id !== id);
      this.students.push(response.body);
    });
  }

  deleteStudent(id: number): void {
    this.studentService.delete(id).subscribe(() => {
      this.students = this.students.filter((x) => x.id !== id);
    });
  }

  goToDetails(id: number): void {
    this.route.navigate(['/student-details', id]);
  }
}
