// src/components/GPACalculator.tsx
import React from 'react';
import { Calculator, Award, GraduationCap, BookOpen } from 'lucide-react';
import { Course } from './course';
import { calculateGPA, getGradeStatus, getGPAColor } from './utils/gradeUtils';

interface GPACalculatorProps {
  courses: Course[];
}

const GPACalculator: React.FC<GPACalculatorProps> = ({ courses }) => {
  const { gpa, totalCredits, totalGradeCredits } = calculateGPA(courses);
  
  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-100 p-6 rounded-2xl shadow-lg border border-purple-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Calculator className="text-purple-600" />
        สรุปผลการเรียน
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-white p-4 rounded-xl shadow-md border border-purple-100">
          <div className="flex items-center gap-3 mb-2">
            <Award className="text-purple-600" size={24} />
            <h3 className="font-semibold text-gray-700">เกรดเฉลี่ย (GPA)</h3>
          </div>
          <p className={`text-3xl font-bold ${getGPAColor(gpa)}`}>
            {gpa.toFixed(2)}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            จาก 4.00
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow-md border border-purple-100">
          <div className="flex items-center gap-3 mb-2">
            <GraduationCap className="text-blue-600" size={24} />
            <h3 className="font-semibold text-gray-700">หน่วยกิตรวม</h3>
          </div>
          <p className="text-3xl font-bold text-blue-600">
            {totalCredits}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            หน่วยกิต
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow-md border border-purple-100">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="text-green-600" size={24} />
            <h3 className="font-semibold text-gray-700">หน่วยกิตที่มีเกรด</h3>
          </div>
          <p className="text-3xl font-bold text-green-600">
            {totalGradeCredits}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            หน่วยกิต
          </p>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-xl shadow-md border border-purple-100">
        <h3 className="font-semibold text-gray-700 mb-3">สถานะการศึกษา</h3>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${getGPAColor(gpa).includes('red') ? 'bg-red-500' : getGPAColor(gpa).includes('yellow') ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
          <span className="text-gray-700 font-medium">
            {getGradeStatus(gpa)}
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          ผลการเรียนจากรายวิชาทั้งหมด {courses.length} วิชา
        </p>
      </div>
    </div>
  );
};

export default GPACalculator;