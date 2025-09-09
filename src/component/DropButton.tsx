// src/components/DropButton.tsx

import React from 'react';
import { X } from 'lucide-react';

interface DropButtonProps {
  onDrop: (courseId: number) => void;
  courseId: number;
  disabled?: boolean;
}

const DropButton: React.FC<DropButtonProps> = ({ 
  onDrop, 
  courseId, 
  disabled = false 
}) => {
  const handleClick = (): void => {
    if (!disabled) {
      onDrop(courseId);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      title="ถอนรายวิชา"
    >
      <X size={16} />
      ถอน
    </button>
  );
};

export default DropButton;