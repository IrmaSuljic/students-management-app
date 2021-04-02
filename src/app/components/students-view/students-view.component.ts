import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Student } from './../../models/student';
import { StudentService } from './../../services/student.service';
import { AddStudentFormComponent } from './../add-student-form/add-student-form.component';

@Component({
  selector: 'app-students-view',
  templateUrl: './students-view.component.html',
  styleUrls: ['./students-view.component.css'],
})
export class StudentsViewComponent implements OnInit {
  students: Student[] = [];
  constructor(
    private route: Router,
    private studentService: StudentService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getAll().subscribe((response) => {
      this.students = response.body;
    });
  }

  openAddStudentModal() {
    this.modalService.open(AddStudentFormComponent);
  }

  addStudent(): void {
    const student = {
      id: 5,
      firstName: 'Niko',
      lastName: 'Nikic',
      courses: [
        { id: 1, title: 'HTML', completed: 8 },
        { id: 2, title: 'CSS', completed: 8 },
        { id: 4, title: 'Angular', completed: 4 },
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
    this.route.navigate(['/student-update-form-reactive', id]);
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
