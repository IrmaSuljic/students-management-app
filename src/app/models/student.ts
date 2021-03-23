import { Course } from './course';
export interface Student {
  firstName: string;
  lastName: string;
  courses: Course[];
  currentCourse?: string;
}
