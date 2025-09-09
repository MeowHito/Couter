// src/components/CourseForm.tsx

import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { Course, CourseFormData, Grade } from './course';

interface CourseFormProps {
  onAddCourse: (course: Omit<Course, 'id'>) => void;
}

const CourseForm: React.FC<CourseFormProps> = ({ onAddCourse }) => {
  const [formData, setFormData] = useState<CourseFormData>({
    courseCode: '',
    courseName: '',
    courseNameEng: '',
    credits: '',
    instructor: '',
    grade: ''
  });

  const handleSubmit = (): void => {
    if (formData.courseCode && formData.courseName) {
      onAddCourse({
        courseCode: formData.courseCode,
        courseName: formData.courseName,
        courseNameEng: formData.courseNameEng || undefined,
        credits: parseInt(formData.credits) || 0,
        instructor: formData.instructor || undefined,
        grade: formData.grade as Grade || undefined
      });
      
      setFormData({
        courseCode: '',
        courseName: '',
        courseNameEng: '',
        credits: '',
        instructor: '',
        grade: ''
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const gradeOptions: Grade[] = ['A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'F', 'W', 'I', 'P', 'S', 'U'];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-2xl shadow-lg border border-blue-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <PlusCircle className="text-blue-600" />
        เพิ่มรายวิชา
      </h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              รหัสวิชา <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="courseCode"
              value={formData.courseCode}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="เช่น CS101"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              หน่วยกิต <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="credits"
              value={formData.credits}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="3"
              min="0"
              max="6"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            ชื่อวิชา (ไทย) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="เช่น หลักการเขียนโปรแกรม"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">ชื่อวิชา (อังกฤษ)</label>
          <input
            type="text"
            name="courseNameEng"
            value={formData.courseNameEng}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="เช่น Programming Fundamentals"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">ชื่ออาจารย์ผู้สอน</label>
            <input
              type="text"
              name="instructor"
              value={formData.instructor}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="เช่น อ.สมชาย ใจดี"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">เกรด</label>
            <select
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">เลือกเกรด</option>
              {gradeOptions.map(grade => (
                <option key={grade} value={grade}>{grade}</option>
              ))}
            </select>
          </div>
        </div>
        
        <button
          onClick={handleSubmit}
          disabled={!formData.courseCode || !formData.courseName}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          เพิ่มรายวิชา
        </button>
      </div>
    </div>
  );
};

export default CourseForm;