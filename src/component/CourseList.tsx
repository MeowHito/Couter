// src/components/CourseList.tsx

import React from 'react';
import { BookOpen, User } from 'lucide-react';
import { Course } from './course';
import { getGradeColor } from './utils/gradeUtils';
import DropButton from './DropButton';

interface CourseListProps {
  courses: Course[];
  onDropCourse: (courseId: number) => void;
}

const CourseList: React.FC<CourseListProps> = ({ courses, onDropCourse }) => {
  if (courses.length === 0) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <div className="text-center text-gray-500">
          <BookOpen size={64} className="mx-auto mb-4 text-gray-300" />
          <p className="text-lg font-medium">ยังไม่มีรายวิชาที่ลงทะเบียน</p>
          <p className="text-sm mt-2">เพิ่มรายวิชาใหม่เพื่อเริ่มต้นใช้งาน</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <BookOpen className="text-green-600" />
        รายวิชาที่ลงทะเบียน ({courses.length} รายวิชา)
      </h2>
      
      <div className="space-y-4">
        {courses.map((course) => (
          <div 
            key={course.id} 
            className="bg-gradient-to-r from-gray-50 to-gray-100 p-5 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    {course.courseCode}
                  </span>
                  
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-lg text-sm font-semibold border border-indigo-200">
                    {course.credits} หน่วยกิต
                  </span>
                  
                  {course.grade && (
                    <span className={`px-3 py-1 rounded-lg text-sm font-bold border ${getGradeColor(course.grade)}`}>
                      เกรด {course.grade}
                    </span>
                  )}
                </div>
                
                <h3 className="font-semibold text-lg text-gray-800 mb-1">
                  {course.courseName}
                </h3>
                
                {course.courseNameEng && (
                  <p className="text-gray-600 mb-2 italic text-sm">
                    {course.courseNameEng}
                  </p>
                )}
                
                {course.instructor && (
                  <p className="text-gray-600 flex items-center gap-2 text-sm">
                    <User size={16} />
                    {course.instructor}
                  </p>
                )}
              </div>
              
              <div className="ml-4">
                <DropButton onDrop={onDropCourse} courseId={course.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;