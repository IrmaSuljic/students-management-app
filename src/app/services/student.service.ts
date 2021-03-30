import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Student } from './../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private httpClient: HttpClient) {}
  studentsUrl = environment.api_url + '/students';

  getAll(): Observable<HttpResponse<Student[]>> {
    return this.httpClient.get<Student[]>(this.studentsUrl, {
      observe: 'response',
    });
  }

  getById(id: number): Observable<HttpResponse<Student>> {
    return this.httpClient.get<Student>(`${this.studentsUrl}/${id}`, {
      observe: 'response',
    });
  }

  add(student: Student): Observable<HttpResponse<Student>> {
    return this.httpClient.post<Student>(this.studentsUrl, student, {
      observe: 'response',
    });
  }

  update(student: Student): Observable<HttpResponse<Student>> {
    return this.httpClient.put<Student>(
      `${this.studentsUrl}/${student.id}`,
      student,
      {
        observe: 'response',
      }
    );
  }

  delete(id: number): Observable<HttpResponse<void>> {
    return this.httpClient.delete<void>(`${this.studentsUrl}/${id}`, {
      observe: 'response',
    });
  }
}
