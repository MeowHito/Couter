// src/utils/gradeUtils.ts

import { Grade, Course, GPAData } from '../course';

export const getGradeColor = (grade: Grade): string => {
  const colors: Record<Grade, string> = {
    'A': 'bg-green-100 text-green-800 border-green-200',
    'B+': 'bg-blue-100 text-blue-800 border-blue-200',
    'B': 'bg-blue-100 text-blue-800 border-blue-200',
    'C+': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'C': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'D+': 'bg-orange-100 text-orange-800 border-orange-200',
    'D': 'bg-orange-100 text-orange-800 border-orange-200',
    'F': 'bg-red-100 text-red-800 border-red-200',
    'W': 'bg-gray-100 text-gray-800 border-gray-200',
    'I': 'bg-purple-100 text-purple-800 border-purple-200',
    'P': 'bg-green-100 text-green-800 border-green-200',
    'S': 'bg-green-100 text-green-800 border-green-200',
    'U': 'bg-red-100 text-red-800 border-red-200'
  };
  return colors[grade] || 'bg-gray-100 text-gray-800 border-gray-200';
};

export const calculateGPA = (courses: Course[]): GPAData => {
  const gradePoints: Record<string, number> = {
    'A': 4.0,
    'B+': 3.5,
    'B': 3.0,
    'C+': 2.5,
    'C': 2.0,
    'D+': 1.5,
    'D': 1.0,
    'F': 0.0
  };

  const validCourses = courses.filter(course => 
    course.grade && gradePoints.hasOwnProperty(course.grade)
  );

  if (validCourses.length === 0) {
    return { gpa: 0, totalCredits: 0, totalGradeCredits: 0 };
  }

  const totalGradePoints = validCourses.reduce((sum, course) => {
    return sum + (gradePoints[course.grade!] * course.credits);
  }, 0);

  const totalCredits = validCourses.reduce((sum, course) => sum + course.credits, 0);
  const allCredits = courses.reduce((sum, course) => sum + course.credits, 0);

  return {
    gpa: totalCredits > 0 ? (totalGradePoints / totalCredits) : 0,
    totalCredits: allCredits,
    totalGradeCredits: totalCredits
  };
};

export const getGradeStatus = (gpa: number): string => {
  if (gpa >= 3.5) return '🏆 เก่งมาก (เกียรตินิยม)';
  if (gpa >= 3.0) return '🌟 ดี';
  if (gpa >= 2.5) return '👍 พอใช้';
  if (gpa >= 2.0) return '⚠️ ผ่านเกณฑ์';
  if (gpa > 0) return '❌ ต่ำกว่าเกณฑ์';
  return '📊 ยังไม่มีเกรด';
};

export const getGPAColor = (gpa: number): string => {
  if (gpa >= 3.5) return 'text-green-600';
  if (gpa >= 2.5) return 'text-yellow-600';
  if (gpa >= 2.0) return 'text-orange-600';
  return 'text-red-600';
};