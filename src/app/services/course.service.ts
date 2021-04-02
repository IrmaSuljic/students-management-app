import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private httpClient: HttpClient) {}
  coursesUrl = environment.api_url + '/courses';

  getAll(): Observable<HttpResponse<Course[]>> {
    return this.httpClient.get<Course[]>(this.coursesUrl, {
      observe: 'response',
    });
  }

  add(course: Course): Observable<HttpResponse<Course>> {
    return this.httpClient.post<Course>(this.coursesUrl, course, {
      observe: 'response',
    });
  }

  update(course: Course): Observable<HttpResponse<Course>> {
    return this.httpClient.put<Course>(
      `${this.coursesUrl}${course.id}`,
      course,
      {
        observe: 'response',
      }
    );
  }

  delete(id: number): Observable<HttpResponse<void>> {
    return this.httpClient.delete<void>(`${this.coursesUrl}/${id}`, {
      observe: 'response',
    });
  }
}
