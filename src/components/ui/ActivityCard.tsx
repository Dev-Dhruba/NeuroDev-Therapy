"use client"

import React from 'react';

interface ActivityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: string;
  onStart: () => void;
  buttonText?: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  icon,
  title,
  description,
  content,
  onStart,
  buttonText = "Start"
}) => {
  return (
    <div className="group bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:bg-purple-50 hover:border-purple-200 transition-all duration-300 overflow-hidden transform hover:scale-105">
      <div className="p-6">
        {/* Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4 transition-colors duration-300 group-hover:bg-purple-200">
          {icon}
        </div>
        
        {/* Title and Description */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-purple-800">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 transition-colors duration-300 group-hover:text-purple-700">{description}</p>
        
        {/* Content */}
        <p className="text-sm text-gray-500 mb-6 transition-colors duration-300 group-hover:text-gray-600">{content}</p>
        
        {/* CTA Button */}
        <button
          onClick={onStart}
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md font-medium transition-all duration-300 hover:bg-purple-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ActivityCard; 