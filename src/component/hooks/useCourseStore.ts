// src/hooks/useCourseStore.ts

import { useState } from 'react';
import { Course, CourseStore } from '../course';

export const useCourseStore = (): CourseStore => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [droppedCourses, setDroppedCourses] = useState<Course[]>([]);

  const addCourse = (course: Omit<Course, 'id'>): void => {
    setCourses(prev => [...prev, { ...course, id: Date.now() }]);
  };

  const dropCourse = (courseId: number): void => {
    const courseToDrop = courses.find(course => course.id === courseId);
    if (courseToDrop) {
      setDroppedCourses(prev => [...prev, courseToDrop]);
      setCourses(prev => prev.filter(course => course.id !== courseId));
    }
  };

  const restoreCourse = (courseId: number): void => {
    const courseToRestore = droppedCourses.find(course => course.id === courseId);
    if (courseToRestore) {
      setCourses(prev => [...prev, courseToRestore]);
      setDroppedCourses(prev => prev.filter(course => course.id !== courseId));
    }
  };

  const clearAllDropped = (): void => {
    setDroppedCourses([]);
  };

  return {
    courses,
    droppedCourses,
    addCourse,
    dropCourse,
    restoreCourse,
    clearAllDropped
  };
};