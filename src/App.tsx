// src/App.tsx

import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useCourseStore } from './component/hooks/useCourseStore';
import CourseForm from './component/CourseForm';
import CourseList from './component/CourseList';
import CourseDrop from './component/CourseDrop';
import GPACalculator from './component/GPACalculator';

const App: React.FC = () => {
  const { 
    courses, 
    droppedCourses, 
    addCourse, 
    dropCourse, 
    restoreCourse, 
    clearAllDropped 
  } = useCourseStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <GraduationCap className="text-blue-600" size={48} />
            ระบบการถอนรายวิชา
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            จัดการการลงทะเบียนเรียน คำนวณเกรดเฉลี่ย และถอนรายวิชาได้อย่างง่ายดาย
          </p>
        </header>

        <div className="space-y-8">
          {/* Course Form */}
          <CourseForm onAddCourse={addCourse} />
          
          {/* GPA Calculator */}
          <GPACalculator courses={courses} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Course List */}
            <CourseList courses={courses} onDropCourse={dropCourse} />
            
            {/* Dropped Courses */}
            <CourseDrop 
              droppedCourses={droppedCourses} 
              onRestoreCourse={restoreCourse}
              onClearAll={clearAllDropped}
            />
          </div>
        </div>

        <footer className="text-center mt-12 py-6 border-t border-gray-200">
          <p className="text-gray-500">
            🎓 ระบบจัดการรายวิชา | พัฒนาด้วย React & TypeScript & Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;