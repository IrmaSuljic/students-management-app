import { Course } from './course';
export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  courses: Course[];
  currentCourse?: string;
  dateOfBirth?: any;
}
