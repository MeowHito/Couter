// src/types/course.ts

export type Grade = 'A' | 'B+' | 'B' | 'C+' | 'C' | 'D+' | 'D' | 'F' | 'W' | 'I' | 'P' | 'S' | 'U';

export interface Course {
  id: number;
  courseCode: string;
  courseName: string;
  courseNameEng?: string;
  credits: number;
  instructor?: string;
  grade?: Grade;
}

export interface CourseFormData {
  courseCode: string;
  courseName: string;
  courseNameEng: string;
  credits: string;
  instructor: string;
  grade: string;
}

export interface GPAData {
  gpa: number;
  totalCredits: number;
  totalGradeCredits: number;
}

export interface CourseStore {
  courses: Course[];
  droppedCourses: Course[];
  addCourse: (course: Omit<Course, 'id'>) => void;
  dropCourse: (courseId: number) => void;
  restoreCourse: (courseId: number) => void;
  clearAllDropped: () => void;
}