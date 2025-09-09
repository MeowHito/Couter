// src/components/CourseDrop.tsx

import React from 'react';
import { Trash2, RotateCcw, User } from 'lucide-react';
import { Course } from './course';

interface CourseDropProps {
  droppedCourses: Course[];
  onRestoreCourse: (courseId: number) => void;
  onClearAll: () => void;
}

const CourseDrop: React.FC<CourseDropProps> = ({ 
  droppedCourses, 
  onRestoreCourse, 
  onClearAll 
}) => {
  if (droppedCourses.length === 0) {
    return (
      <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border-2 border-dashed border-gray-300">
        <div className="text-center text-gray-500">
          <Trash2 size={64} className="mx-auto mb-4 text-gray-300" />
          <p className="text-lg font-medium">ยังไม่มีรายวิชาที่ถอน</p>
          <p className="text-sm mt-2">รายวิชาที่ถอนจะแสดงที่นี่</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl shadow-lg border border-red-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Trash2 className="text-red-600" />
          รายวิชาที่ถอน ({droppedCourses.length} รายวิชา)
        </h2>
        
        <button
          onClick={onClearAll}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 text-sm font-semibold shadow-md"
        >
          ลบทั้งหมด
        </button>
      </div>
      
      <div className="space-y-4">
        {droppedCourses.map((course) => (
          <div 
            key={course.id} 
            className="bg-white p-5 rounded-xl border border-red-200 hover:shadow-md transition-all duration-300 opacity-75 hover:opacity-100"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    {course.courseCode}
                  </span>
                  
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-lg text-sm font-semibold border border-gray-200">
                    {course.credits} หน่วยกิต
                  </span>
                  
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-lg text-sm font-semibold border border-red-200">
                    ถูกถอน
                  </span>
                  
                  {course.grade && (
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-sm font-semibold border border-gray-200 line-through">
                      เกรด {course.grade}
                    </span>
                  )}
                </div>
                
                <h3 className="font-semibold text-lg text-gray-700 mb-1 line-through">
                  {course.courseName}
                </h3>
                
                {course.courseNameEng && (
                  <p className="text-gray-500 mb-2 italic line-through text-sm">
                    {course.courseNameEng}
                  </p>
                )}
                
                {course.instructor && (
                  <p className="text-gray-500 flex items-center gap-2 text-sm">
                    <User size={16} />
                    <span className="line-through">{course.instructor}</span>
                  </p>
                )}
              </div>
              
              <div className="ml-4">
                <button
                  onClick={() => onRestoreCourse(course.id)}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-md"
                  title="กู้คืนรายวิชา"
                >
                  <RotateCcw size={16} />
                  กู้คืน
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDrop;