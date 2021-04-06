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

  openAddStudentModal(): void {
    this.modalService
      .open(AddStudentFormComponent, { size: 'lg' })
      .result.then((result) => {
        if (result) {
          this.students.push(result);
        }
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
